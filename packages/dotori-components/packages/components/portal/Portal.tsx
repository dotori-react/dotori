import { createPortal } from 'react-dom';

const Portal = ({ children, target }: PortalProps) => {
  const Root = (typeof target === 'string' ? document.querySelector(target) : target) ?? document.body;

  return createPortal(children, Root);
};

interface PortalProps {
  children: React.ReactNode;
  target?: HTMLElement;
}

export default Portal;
