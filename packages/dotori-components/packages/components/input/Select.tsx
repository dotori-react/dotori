import { useRef, useState } from 'react';

import { useDisClosure } from 'dotori-hooks';
import { cn } from 'dotori-utils';

import { Dropdown, Input } from '@dotori-components/components';

const Select = <T extends { value: string; label: string; [index: string]: string }>({
  data,
  placeholder,
  disabled,
  value,
  onChange,
}: SelectProps<T>) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [selectedLabel, setSelectedLabel] = useState('');
  const { isOpen, open, close } = useDisClosure();

  const controlledSelectedLabel =
    value === undefined ? selectedLabel : (data.find(item => item.value === value)?.label ?? '');

  const handleDropdownItemClick = (item: T, index: number) => () => {
    if (value === undefined) setSelectedLabel(item.label);
    if (onChange) onChange(item);

    setCurrentIdx(index);
    close();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputKeyDownHashTable = {
      ArrowDown() {
        e.preventDefault();

        setCurrentIdx(prev => (prev + 1 === data.length ? prev : prev + 1));
      },
      ArrowUp() {
        e.preventDefault();

        setCurrentIdx(prev => (prev === -1 ? prev : prev - 1));
      },
      Enter() {
        close();
        inputRef.current?.blur();

        if (!data[currentIdx]) return;

        setSelectedLabel(data[currentIdx].label);
        setCurrentIdx(-1);

        if (onChange) onChange(data[currentIdx]);
      },
    };

    inputKeyDownHashTable[e.key as keyof typeof inputKeyDownHashTable]();
  };

  return (
    <>
      <Dropdown
        close={close}
        disabled={disabled}
        isOpen={isOpen}
        open={open}
        contents={
          <div className="flex flex-col gap-3">
            {data.map((item, index) => (
              <button
                key={item.value}
                className={dropdownItemStyle({ isCurrentIndex: currentIdx === index })}
                onClick={handleDropdownItemClick(item, index)}>
                {item.label}
              </button>
            ))}
          </div>
        }
        fullWidth>
        <Input
          ref={inputRef}
          className={inputStyle({ disabled })}
          disabled={disabled}
          placeholder={placeholder}
          value={controlledSelectedLabel}
          readOnly
          onKeyDown={handleInputKeyDown}
        />
      </Dropdown>
    </>
  );
};

interface SelectProps<T> {
  data: T[];
  placeholder?: string;
  value?: string;
  onChange?: (value: T) => void;
  disabled?: boolean;
}

const dropdownItemStyle = cn('cursor-pointer p-2 text-start hover:bg-gray-100', {
  variants: {
    isCurrentIndex: {
      true: 'bg-gray-100',
      false: '',
    },
  },
});

const inputStyle = cn('cursor-pointer', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
  },
});

export default Select;
