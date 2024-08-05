import { createSafeContext } from 'dotori-context';

interface TabsContextValue {
  defaultValue: string | undefined;
  currentDefaultValueChange: (value: string) => void;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContextValue>(
  'Tabs component was not found in the tree',
);
