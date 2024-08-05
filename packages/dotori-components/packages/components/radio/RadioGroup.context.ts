import { createOptionalContext } from 'dotori-context';

interface RadioGroupContextValue {
  name: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const [RadioGroupProvider, useRadioGroupContext] = createOptionalContext<RadioGroupContextValue>();
