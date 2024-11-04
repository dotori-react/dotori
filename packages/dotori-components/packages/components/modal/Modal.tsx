import { useCreateElement, useOutSideClick } from 'dotori-hooks';

import { CloseButton, Paper, Portal, type PaperProps } from '@dotori-components/components';

const Modal = ({ isOpen, close, children, ...paperProps }: ModalProps) => {
  const ref = useOutSideClick<HTMLDivElement>(close);
  useCreateElement([{ tagName: 'div', attributes: { id: 'modal' } }]);

  return (
    <Portal target={document.getElementById('modal') as HTMLElement}>
      {isOpen && (
        <div className="tw-preflight">
          <section className="fixed left-0 top-0 z-background flex h-full w-full items-center justify-center bg-dimmed">
            <Paper ref={ref} {...paperProps}>
              <div className="mb-[10px] flex flex-row-reverse">
                <CloseButton onClick={close} />
              </div>
              {children}
            </Paper>
          </section>
        </div>
      )}
    </Portal>
  );
};

interface ModalProps extends PaperProps {
  isOpen: boolean;
  close: () => void;
}

export default Modal;
