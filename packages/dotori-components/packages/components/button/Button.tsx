import { forwardRef } from 'react';

import { cn, VariantProps } from 'dotori-utils';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ circle, size, variant, color, disabled, fullWidth, children, className, ...rest }, ref) => (
    <button
      ref={ref}
      className={buttonStyle({ circle, variant, color, fullWidth, disabled, className, size })}
      disabled={disabled}
      {...rest}>
      {children}
    </button>
  ),
);

interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'color'>,
    Omit<VariantProps<typeof buttonStyle>, 'disabled'> {}

const buttonStyle = cn('typo-sm500 box-border border-none px-4', {
  variants: {
    color: {
      black: 'border-gray-900 bg-gray-900 text-gray-900 hover:bg-gray-900',
      blue: 'border-blue-600 bg-blue-600 text-blue-600 hover:bg-blue-600',
      gray: 'border-gray-600 bg-gray-600 text-gray-600 hover:bg-gray-600',
      green: 'border-green-600 bg-green-600 text-green-600 hover:bg-green-600',
      red: 'border-red-600 bg-red-600 text-red-600 hover:bg-red-600',
      yellow: 'border-yellow-600 bg-yellow-600 text-yellow-600 hover:bg-yellow-600',
    },
    variant: {
      filled: 'text-gray-100 hover:bg-opacity-80',
      outline: 'border border-solid bg-transparent hover:bg-opacity-10',
      subtle: 'bg-transparent hover:bg-opacity-10',
      unstyle: 'bg-transparent hover:bg-opacity-0',
    },
    size: {
      xs: 'h-8 text-xs leading-[theme(fontSize.xs)]',
      sm: 'h-9 text-sm leading-[theme(fontSize.sm)]',
      md: 'h-10 text-md leading-[theme(fontSize.md)]',
      lg: 'h-11 text-lg leading-[theme(fontSize.lg)]',
      xl: 'h-12 text-xl leading-[theme(fontSize.xl)]',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed bg-gray-200 text-gray-500 hover:bg-gray-300 hover:bg-opacity-100',
      false: '',
    },
    circle: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
  },
  defaultVariants: {
    variant: 'filled',
    color: 'black',
    size: 'xs',
    fullWidth: false,
    circle: false,
  },
});

export default Button;
