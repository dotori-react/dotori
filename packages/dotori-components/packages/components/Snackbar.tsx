import { useCreateElement, useDisClosure, useOutSideClick, useTimeout } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { CloseButton, Portal } from '@dotori-components/components';

const Snackbar = ({ title, description, position, delay = 500000, className }: SnackbarProps) => {
  const { isOpen, close } = useDisClosure(true);
  const ref = useOutSideClick(close);
  useCreateElement([{ tagName: 'div', attributes: { id: 'snackbar' } }]);
  useTimeout({ callback: close, milliseconds: delay });

  return (
    <>
      {isOpen && (
        <Portal target={document.getElementById('snackbar') as HTMLElement}>
          <section ref={ref} className={snackbarStyle({ position, className })}>
            <div className="mb-[10px] flex flex-row-reverse">
              <CloseButton onClick={close} />
            </div>
            <div className="p-5">
              {title && <span>{title}</span>}
              {description && <span>{description}</span>}
            </div>
          </section>
        </Portal>
      )}
    </>
  );
};

interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof snackbarStyle> {
  title: string;
  description?: React.ReactNode;
  delay?: number;
}

const snackbarStyle = cn('fixed z-[2] m-5 rounded-sm border border-gray-300 bg-gray-100 p-2', {
  variants: {
    position: {
      top: 'top-0',
      left: 'left-0',
      right: 'right-0',
      bottom: 'bottom-0',
      leftTop: 'left-0 top-0',
      rightTop: 'right-0 top-0',
      leftBottom: 'bottom-0 left-0',
      rightBottom: 'bottom-0 right-0',
    },
    fullWidth: {
      true: 'left-0 right-0',
      false: '',
    },
  },
  defaultVariants: {
    position: 'leftTop',
    fullWidth: false,
  },
});

export default Snackbar;
