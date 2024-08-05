import { cn } from 'dotori-utils';

const TabList = ({ children }: TabListProps) => <div className={tabListStyle()}>{children}</div>;

export interface TabListProps {
  children: React.ReactNode;
}

const tabListStyle = cn(
  'relative z-0 mb-2 flex before:absolute before:bottom-0 before:h-[1px] before:w-full before:border-b-2 before:border-gray-300',
);

export default TabList;
