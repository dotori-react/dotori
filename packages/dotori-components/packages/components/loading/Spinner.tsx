import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

const Spinner = ({ className, size, color }: SpinnerProps) => (
  <div className={spinnerIconStyle({ color, size, className })}>
    <Icon icon="spinner" />
  </div>
);

interface SpinnerProps extends VariantProps<typeof spinnerIconStyle> {
  className?: string;
}

const spinnerIconStyle = cn('h-10 w-10 animate-spin', {
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-14 w-14',
    },
    color: {
      blue: 'fill-blue-600',
      green: 'fill-green-600',
      red: 'fill-red-600',
      yellow: 'fill-yellow-600',
      gray: 'fill-gray-600',
      white: 'fill-gray-0',
      black: 'fill-gray-900',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'gray',
  },
});

export default Spinner;
