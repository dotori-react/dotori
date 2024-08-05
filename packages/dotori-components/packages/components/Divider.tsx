import { cn, VariantProps } from 'dotori-utils';

const Divider = ({ height, className, ...props }: DividerProps) => (
  <div className={dividerStyle({ height, className })} {...props} />
);

interface DividerProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>,
    VariantProps<typeof dividerStyle> {}

const dividerStyle = cn('my-2 h-px bg-gray-500', {
  variants: {
    height: {
      xs: 'h-px',
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
      xl: 'h-4',
    },
  },
  defaultVariants: {
    height: 'xs',
  },
});

export default Divider;
