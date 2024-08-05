import { cn } from 'dotori-utils';

import { useTabsContext } from './Tabs.context';

const Tab = ({ value, leftIcon, rightIcon, children }: TabProps) => {
  const ctx = useTabsContext();
  const isActive = ctx.defaultValue === value;

  const handleTabClick = () => ctx.currentDefaultValueChange(value);

  return (
    <button className={tabStyle({ isActive })} onClick={handleTabClick}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export interface TabProps {
  value: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const tabStyle = cn('z-[1] flex items-center justify-center gap-2 border-b-2 px-4 py-2 hover:bg-gray-200', {
  variants: {
    isActive: {
      true: 'border-blue-500',
      false: 'border-red-500',
    },
  },
});

export default Tab;
