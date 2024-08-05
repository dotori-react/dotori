import { useState } from 'react';

import { Input, Pill } from '@/components';

import { InputProps } from './Input';

const PillInput = ({ value, onChange, ...omittedInputProps }: PillInputProps) => {
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
    <div className="flex flex-wrap items-center gap-1 border border-gray-200 px-3 py-1">
      {pillValues.map((v, i) => (
        <Pill key={i} withCloseButton onClose={() => handlePillDelete(i)}>
          {v}
        </Pill>
      ))}
      <Input {...omittedInputProps} className="h-full min-w-24 flex-1 border-none p-0" onKeyDown={onKeyDown} />
    </div>
  );
};

interface PillInputProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: string[];
  onChange?: (values: string[]) => void;
}

export default PillInput;
