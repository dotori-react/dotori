import { useState } from 'react';

import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

import ChipGroup from './ChipGroup';
import { useChipGroupContext } from './ChipGroup.context';

const Chip = ({ size, color, defaultChecked = false, variant, value = '', children }: ChipProps) => {
  const [checked, setChecked] = useState(defaultChecked);
  const ctx = useChipGroupContext();

  const contextProps = ctx
    ? {
        type: ctx.inputType,
        checked: ctx.hasSelectedChip(value),
      }
    : {};

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    ctx?.onChange(e.target.value);
  };

  return (
    <label className={chipContainerStyle({ size, color, variant, checked: ctx ? contextProps.checked : checked })}>
      <input
        value={value}
        onChange={handleCheckChange}
        {...defaultProps}
        {...contextProps}
        checked={ctx ? contextProps.checked : checked}
        name="test"
      />
      {(ctx ? contextProps.checked : checked) && <Icon className={iconStyle({ size, color, variant })} icon="check" />}
      <span className="">{children}</span>
    </label>
  );
};

interface ChipProps extends VariantProps<typeof chipContainerStyle> {
  children: React.ReactNode;
  defaultChecked?: boolean;
  value?: string;
}

const defaultProps = {
  type: 'checkbox',
  checked: false,
};

const chipContainerStyle = cn('inline-flex cursor-pointer items-center justify-center gap-1 rounded-md px-2', {
  variants: {
    size: {
      xs: 'h-4 text-3xs',
      sm: 'h-5 text-2xs',
      md: 'h-6 text-xs',
      lg: 'h-7 text-sm',
      xl: 'h-8 text-md',
    },
    color: {
      black: 'bg-gray-900 hover:bg-black',
      blue: 'bg-blue-600 text-blue-600 hover:bg-blue-700',
      gray: 'bg-gray-600 text-gray-600 hover:bg-gray-700',
      green: 'bg-green-600 text-green-600 hover:bg-green-700',
      red: 'bg-red-600 text-red-600 hover:bg-red-700',
      yellow: 'bg-yellow-600 text-yellow-600 hover:bg-yellow-700',
    },
    variant: {
      filled: 'text-gray-200',
      outline: 'border bg-transparent hover:bg-opacity-10',
      subtle: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    },
    checked: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    { color: 'black', variant: 'outline', checked: true, className: 'border-gray-900' },
    { color: 'blue', variant: 'outline', checked: true, className: 'border-blue-600' },
    { color: 'gray', variant: 'outline', checked: true, className: 'border-gray-600' },
    { color: 'green', variant: 'outline', checked: true, className: 'border-green-600' },
    { color: 'red', variant: 'outline', checked: true, className: 'border-red-600' },
    { color: 'yellow', variant: 'outline', checked: true, className: 'border-yellow-600' },
    { color: 'black', variant: 'subtle', checked: true, className: 'bg-gray-100 text-gray-900 hover:bg-gray-200' },
    { color: 'blue', variant: 'subtle', checked: true, className: 'bg-blue-100 text-blue-600 hover:bg-blue-200' },
    { color: 'gray', variant: 'subtle', checked: true, className: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
    { color: 'green', variant: 'subtle', checked: true, className: 'bg-green-100 text-green-600 hover:bg-green-200' },
    { color: 'red', variant: 'subtle', checked: true, className: 'bg-red-100 text-red-600 hover:bg-red-200' },
    {
      color: 'yellow',
      variant: 'subtle',
      checked: true,
      className: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
    },
  ],
  defaultVariants: {
    size: 'sm',
    color: 'black',
    variant: 'outline',
  },
});

const iconStyle = cn('', {
  variants: {
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-7 w-7',
      xl: 'h-8 w-8',
    },
    color: {
      black: 'fill-gray-900',
      blue: 'fill-blue-600',
      gray: 'fill-gray-600',
      green: 'fill-green-600',
      red: 'fill-red-600',
      yellow: 'fill-yellow-600',
    },
    variant: {
      filled: 'fill-gray-200',
      outline: '',
      subtle: '',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'black',
    variant: 'outline',
  },
});

Chip.Group = ChipGroup;

export default Chip;
