import { useState } from 'react';

import Panel from './Panel';
import Tab from './Tab';
import TabList from './TabList';
import { TabsProvider } from './Tabs.context';

const Tabs = ({ defaultValue, children }: TabsProps) => {
  const [currentValue, setCurrentValue] = useState({ defaultValue });

  const currentDefaultValueChange = (value: string) => {
    setCurrentValue({ ...currentValue, defaultValue: value });
  };

  return <TabsProvider value={{ ...currentValue, currentDefaultValueChange }}>{children}</TabsProvider>;
};

interface TabsProps {
  defaultValue?: string;
  children: React.ReactNode;
}

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.Panel = Panel;

export default Tabs;
