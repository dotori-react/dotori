import { cn } from 'dotori-utils';

const MiniSideBar = ({ children, className, ...props }: MiniSideBarProps) => (
  <nav className={MiniSideBarStyle({ className })} {...props}>
    {children}
  </nav>
);

interface MiniSideBarProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const MiniSideBarStyle = cn('fixed bottom-0 left-0 z-[2] h-full w-20 overflow-scroll p-4 scroll-hidden');

export default MiniSideBar;
