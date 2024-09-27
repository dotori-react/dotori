import { useState } from 'react';

import { cn } from 'dotori-utils';

import { Input, Pill } from '@dotori-components/components';

import type { InputProps } from '@dotori-components/components/input/Input';

const PillInput = ({ value, onChange, size, disabled, ...inputProps }: PillInputProps) => {
  const [pillValues, setPillValues] = useState<string[]>(value ?? []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyDownHashTable = {
      Enter() {
        e.preventDefault();
        e.stopPropagation();

        const element = e.target as HTMLInputElement;
        const { value: elementValue } = element;

        element.value = '';
        if (elementValue.trim() !== '') {
          const newPillValues = [...pillValues, elementValue];

          setPillValues(newPillValues);
          if (onChange) onChange(newPillValues);
        }
      },
    };

    keyDownHashTable[e.key as keyof typeof keyDownHashTable]();
  };

  const handlePillDelete = (index: number) => {
    const newPillValues = pillValues.filter((_, i) => i !== index);

    setPillValues(newPillValues);
    if (onChange) onChange(newPillValues);
  };

  return (
    <div className={pillInputContainerStyle({ disabled })}>
      {pillValues.map((v, i) => (
        <Pill key={i} size={size} withCloseButton onClose={() => handlePillDelete(i)}>
          {v}
        </Pill>
      ))}
      <Input {...inputProps} className="h-full min-w-full flex-1 border-none" size={size} onKeyDown={onKeyDown} />
    </div>
  );
};

interface PillInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  value: string[];
  onChange: (values: string[]) => void;
}

const pillInputContainerStyle = cn('flex flex-wrap items-center gap-1 border border-gray-200 px-3 py-1', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed bg-gray-100',
      false: '',
    },
  },
});

export default PillInput;
