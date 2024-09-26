import { useRef, useState } from 'react';

import { cn, VariantProps } from 'dotori-utils';

import { REGEX } from '@dotori-components/constants';

const PinInput = ({ total, size }: PinInputProps) => {
  const [pinInputValue, setPinInputValue] = useState<string[]>(Array(total).fill(''));
  const pinInputsRef = useRef<HTMLInputElement[] | null[]>([]);

  const handlePinInputChange = (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(REGEX.ONLY_NUMBER, '');

    setPinInputValue(pinInputValue.map((v, i) => (i === idx ? value : v)));

    if (value === '') return;
    pinInputsRef.current[idx + 1]?.focus();
  };

  const handlePinInputKeyDown = (idx: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (Number.isInteger(+e.key) && e.code !== 'Space')
      setPinInputValue(pinInputValue.map((v, i) => (i === idx ? '' : v)));
  };

  return (
    <section>
      {Array.from({ length: total }).map((_, idx) => (
        <input
          key={idx}
          ref={el => {
            pinInputsRef.current[idx] = el;
          }}
          className={pinInputStyle({ size })}
          maxLength={1}
          placeholder="○"
          type="text"
          value={pinInputValue[idx]}
          onChange={handlePinInputChange(idx)}
          onKeyDown={handlePinInputKeyDown(idx)}
        />
      ))}
    </section>
  );
};

interface PinInputProps extends VariantProps<typeof pinInputStyle> {
  total: 1 | 2 | 3 | 4 | 5;
}

const pinInputStyle = cn('border border-gray-200 text-center', {
  variants: {
    size: {
      xs: 'h-7 w-7',
      sm: 'h-8 w-8',
      md: 'h-9 w-9',
      lg: 'h-10 w-10',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default PinInput;