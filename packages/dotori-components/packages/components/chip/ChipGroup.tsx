import { useState } from 'react';

import { ChipGroupProvider } from './ChipGroup.context';

const ChipGroup = <T extends boolean>({ multiple, value, onChange, children }: ChipGroupProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<string[] | string>(value);

  const hasSelectedChip = (val: string) => selectedValue.includes(val);

  const handleSelectedValueChange = (val: string) => {
    const newSelectedValue = Array.isArray(selectedValue)
      ? selectedValue.includes(val)
        ? selectedValue.filter(selVal => selVal !== val)
        : ([...selectedValue, val] as string[])
      : val;

    onChange(newSelectedValue as T extends true ? string[] : string);
    setSelectedValue(newSelectedValue);
  };

  return (
    <ChipGroupProvider
      value={{
        inputType: multiple ? 'checkbox' : 'radio',
        hasSelectedChip,
        selectedValue,
        onChange: handleSelectedValueChange,
      }}>
      {children}
    </ChipGroupProvider>
  );
};

export interface ChipGroupProps<T extends boolean = false> {
  multiple?: T;
  children: React.ReactNode;
  value: T extends true ? string[] : string;
  onChange: (val: T extends true ? string[] : string) => void;
}

export default ChipGroup;
