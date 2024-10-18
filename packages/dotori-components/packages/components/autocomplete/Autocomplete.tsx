import { useState } from 'react';

import { useDisClosure } from 'dotori-hooks';
import { cn } from 'dotori-utils';

import { Dropdown, Input } from '@dotori-components/components';

const Autocomplete = <T extends { value: string; label: string; [index: string]: string }>({
  data,
  placeholder,
  value,
  length = 10,
  onChange,
}: AutocompleteProps<T>) => {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [selectedLabel, setSelectedLabel] = useState('');
  const { isOpen, open, close } = useDisClosure();

  const controlledValue = value === undefined ? selectedLabel : value;
  const filteredData = data.filter(({ label }) => label.includes(controlledValue));

  const handleDropdownItemClick = (label: string) => () => {
    setSelectedLabel(label);
    close();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLabel(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputKeyDownHashTable = {
      ArrowDown() {
        e.preventDefault();

        open();
        setCurrentIdx(prev => (prev + 1 === filteredData.length ? prev : prev + 1));
      },
      ArrowUp() {
        e.preventDefault();

        open();
        setCurrentIdx(prev => (prev === -1 ? prev : prev - 1));
      },
      Enter() {
        close();

        if (!filteredData[currentIdx]) return;

        setSelectedLabel(filteredData[currentIdx].label);
        setCurrentIdx(-1);
        if (onChange) onChange(filteredData[currentIdx].label);
      },
    };

    if (Object.keys(inputKeyDownHashTable).includes(e.key))
      inputKeyDownHashTable[e.key as keyof typeof inputKeyDownHashTable]();
  };

  return (
    <div className="tw-preflight">
      <Dropdown
        close={close}
        isOpen={isOpen}
        open={open}
        contents={
          <div className="flex flex-col gap-3">
            {filteredData.slice(0, length).map((item, index) => (
              <button
                key={item.value}
                className={dropdownItemStyle({ isCurrentIndex: currentIdx === index })}
                onClick={handleDropdownItemClick(item.label)}>
                {item.label}
              </button>
            ))}
          </div>
        }
        fullWidth>
        <Input
          placeholder={placeholder}
          value={controlledValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      </Dropdown>
    </div>
  );
};

interface AutocompleteProps<T> {
  data: T[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  length?: number;
}

const dropdownItemStyle = cn('cursor-pointer p-2 text-start hover:bg-gray-100', {
  variants: {
    isCurrentIndex: {
      true: 'bg-gray-100',
      false: '',
    },
  },
});

export default Autocomplete;
