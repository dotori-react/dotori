import { useEffect, useRef, useState } from 'react';

import { cn, VariantProps } from 'dotori-utils';

import { Input } from '@dotori-components/components';
import { REGEX } from '@dotori-components/constants';

const PinInput = <T extends 1 | 2 | 3 | 4 | 5>({ total, size, value, onChange }: PinInputProps<T>) => {
  const [pinInputValue, setPinInputValue] = useState<string[]>(value);
  const pinInputsRef = useRef<HTMLInputElement[] | null[]>([]);

  const handlePinInputChange = (idx: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const pinInputNumberValue = e.target.value.replace(REGEX.ONLY_NUMBER, '');
    const newPinInputValue = pinInputValue.map((v, i) => (i === idx ? pinInputNumberValue : v)) as Tuple<T>;

    setPinInputValue(newPinInputValue);
    onChange(newPinInputValue);

    if (pinInputNumberValue === '') return;
    pinInputsRef.current[idx + 1]?.focus();
  };

  const handlePinInputKeyDown = (idx: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newPinInputValue = pinInputValue.map((v, i) => (i === idx ? '' : v)) as Tuple<T>;

    if (Number.isInteger(+e.key) && e.code !== 'Space') {
      setPinInputValue(newPinInputValue);
      onChange(newPinInputValue);
    }

    if (e.key === 'Backspace') {
      e.preventDefault();

      setPinInputValue(newPinInputValue);
      onChange(newPinInputValue);

      pinInputsRef.current[idx - 1]?.focus();
    }
  };

  useEffect(() => {
    const newValue = Array.from({ length: total }, () => '');

    onChange(newValue as Tuple<T>);
    setPinInputValue(newValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div className="tw-preflight">
      {Array.from({ length: total }).map((_, idx) => (
        <Input
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
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tuple<N extends number, T = string, R extends any[] = []> = R['length'] extends N ? R : Tuple<N, T, [...R, T]>;

interface PinInputProps<T extends 1 | 2 | 3 | 4 | 5> extends VariantProps<typeof pinInputStyle> {
  total: T;
  value: Tuple<T>;
  onChange: (value: Tuple<T>) => void;
}

const pinInputStyle = cn('border border-gray-200 text-center p-0', {
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
