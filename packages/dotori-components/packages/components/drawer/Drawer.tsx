import { useCreateElement, useOutSideClick } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { CloseButton, Portal } from '@dotori-components/components';

const Drawer = ({ isOpen, close, fullWidth, children }: DrawerProps) => {
  const ref = useOutSideClick<HTMLDivElement>(close);
  useCreateElement([{ tagName: 'div', attributes: { id: 'drawer' } }]);

  return (
    <Portal target={document.getElementById('drawer') as HTMLElement}>
      {isOpen && (
        <div className="tw-preflight">
          <section className="fixed left-0 top-0 z-background h-full w-full bg-dimmed">
            <div ref={ref} className={drawerStyle({ fullWidth })}>
              <div className="mb-[10px]">
                <CloseButton onClick={close} />
              </div>
              {children}
            </div>
          </section>
        </div>
      )}
    </Portal>
  );
};

interface DrawerProps extends React.ComponentPropsWithoutRef<'section'>, VariantProps<typeof drawerStyle> {
  isOpen: boolean;
  close: () => void;
}

const drawerStyle = cn('fixed right-0 top-0 h-full w-1/4 min-w-36 bg-white p-[10px]', {
  variants: {
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
});

export default Drawer;
