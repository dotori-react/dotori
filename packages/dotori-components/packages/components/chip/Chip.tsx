import { useState } from 'react';

import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

import ChipGroup from './ChipGroup';
import { useChipGroupContext } from './ChipGroup.context';

const Chip = ({ size, color, defaultChecked = false, variant, value = '', children, name }: ChipProps) => {
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
    <span className="tw-preflight">
      <label className={chipContainerStyle({ size, color, variant, checked: ctx ? contextProps.checked : checked })}>
        <input
          value={value}
          onChange={handleCheckChange}
          {...defaultProps}
          {...contextProps}
          checked={ctx ? contextProps.checked : checked}
          className="appearance-none"
          name={name}
        />
        {(ctx ? contextProps.checked : checked) && (
          <Icon className={iconStyle({ color, variant })} icon="check" fullSize />
        )}
        <span className="text-inherit whitespace-nowrap">{children}</span>
      </label>
    </span>
  );
};

interface ChipProps extends VariantProps<typeof chipContainerStyle> {
  children: React.ReactNode;
  defaultChecked?: boolean;
  value?: string;
  name?: string;
}

const defaultProps = {
  type: 'checkbox',
  checked: false,
};

const chipContainerStyle = cn(
  'inline-flex cursor-pointer items-center gap-1 rounded-md px-2 align-middle overflow-hidden box-border',
  {
    variants: {
      size: {
        xs: 'h-4 text-3xs',
        sm: 'h-5 text-2xs',
        md: 'h-6 text-xs',
        lg: 'h-7 text-sm',
        xl: 'h-8 text-md',
      },
      checked: {
        true: 'border',
        false: '',
      },
      color: {
        black: 'bg-gray-900 text-gray-900 hover:bg-black border-gray-900',
        blue: 'bg-blue-600 text-blue-600 hover:bg-blue-700 border-blue-600',
        gray: 'bg-gray-600 text-gray-600 hover:bg-gray-700 border-gray-600',
        green: 'bg-green-600 text-green-600 hover:bg-green-700 border-green-600',
        red: 'bg-red-600 text-red-600 hover:bg-red-700 border-red-600',
        yellow: 'bg-yellow-600 text-yellow-600 hover:bg-yellow-700 border-yellow-600',
      },
      variant: {
        filled: 'text-gray-200',
        outline: 'border bg-transparent hover:bg-opacity-10',
        subtle: 'border-none bg-gray-200 hover:bg-gray-300',
      },
    },
    compoundVariants: [
      { variant: 'subtle', checked: false, className: 'text-gray-900' },
      { color: 'black', variant: 'subtle', checked: true, className: 'bg-gray-100 hover:bg-gray-200' },
      { color: 'blue', variant: 'subtle', checked: true, className: 'bg-blue-100 hover:bg-blue-200' },
      { color: 'gray', variant: 'subtle', checked: true, className: 'bg-gray-100 hover:bg-gray-200' },
      { color: 'green', variant: 'subtle', checked: true, className: 'bg-green-100 hover:bg-green-200' },
      { color: 'red', variant: 'subtle', checked: true, className: 'bg-red-100 hover:bg-red-200' },
      { color: 'yellow', variant: 'subtle', checked: true, className: 'bg-yellow-100 hover:bg-yellow-200' },
    ],
    defaultVariants: {
      size: 'sm',
      color: 'black',
      variant: 'outline',
    },
  },
);

const iconStyle = cn('w-auto h-full', {
  variants: {
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
    color: 'black',
    variant: 'outline',
  },
});

Chip.Group = ChipGroup;

export default Chip;
