import { useState } from 'react';

import { AccordionGroupProvider } from './AccordionGroup.context';

const AccordionGroup = ({ defaultValue = '', multiple = false, children }: AccordionGroupProps) => {
  const [accordionState, setAccordionState] = useState<AccordionState>({});
  const [selectedValue, setSelectedValue] = useState('');

  const updateSelectedValue = (value: string) => {
    setSelectedValue(value);
  };

  const updateAccordionState = (value: string, isOpen: boolean) => {
    setAccordionState(prev => ({ ...prev, [value]: { isOpen } }));
  };

  const updateAccordionStateForSingle = (value: string) => {
    const newAccordionState = Object.keys(accordionState).reduce<typeof accordionState>((acc, currentValue) => {
      acc[currentValue] = { isOpen: currentValue === value && !accordionState[currentValue].isOpen };
      return acc;
    }, {});

    setAccordionState(newAccordionState);
  };

  return (
    <AccordionGroupProvider
      value={{
        defaultValue,
        selectedValue,
        accordionState,
        multiple,
        updateSelectedValue,
        updateAccordionState,
        updateAccordionStateForSingle,
      }}>
      {children}
    </AccordionGroupProvider>
  );
};

export interface AccordionState {
  [index: string]: { isOpen: boolean };
}

export interface AccordionGroupProps {
  defaultValue?: string;
  multiple?: boolean;
  children: React.ReactNode;
}

export default AccordionGroup;
