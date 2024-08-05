import { cn } from 'dotori-utils';

const Main = ({ children, className }: MainProps) => <main className={mainStyle({ className })}>{children}</main>;

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

const mainStyle = cn('relative z-[1] m-auto max-w-layout bg-gray-0');

export default Main;
