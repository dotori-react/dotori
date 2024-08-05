import { createOptionalContext } from 'dotori-context';

interface ChipGroupContextValue {
  inputType: 'checkbox' | 'radio';
  hasSelectedChip: (val: string) => boolean;
  selectedValue: string | string[];
  onChange: (val: string) => void;
}

export const [ChipGroupProvider, useChipGroupContext] = createOptionalContext<ChipGroupContextValue>();
