import { cn, VariantProps } from 'dotori-utils';

const Badge = ({ color, children, size, variant, fullWidth, ...rest }: BadgeProps) => (
  <section className={badgeContainerStyle({ color, variant, size, fullWidth })} {...rest}>
    <span className={badgeStyle({ size })}>{children}</span>
  </section>
);

interface BadgeProps
  extends Omit<React.ComponentPropsWithoutRef<'section'>, 'color'>,
    VariantProps<typeof badgeContainerStyle>,
    VariantProps<typeof badgeStyle> {
  children: string;
}

const badgeContainerStyle = cn('typo-sm500 box-border inline-flex items-center justify-center rounded-md px-3', {
  variants: {
    color: {
      black: 'border-gray-900 bg-gray-900 text-gray-900',
      blue: 'border-blue-600 bg-blue-600 text-blue-600',
      gray: 'border-gray-600 bg-gray-600 text-gray-600',
      green: 'border-green-600 bg-green-600 text-green-600',
      red: 'border-red-600 bg-red-600 text-red-600',
      yellow: 'border-yellow-600 bg-yellow-600 text-yellow-600',
    },
    variant: {
      filled: 'text-gray-100',
      outline: 'border bg-transparent',
      subtle: 'bg-transparent',
    },
    size: {
      xs: 'h-3 text-3xs',
      sm: 'h-4 text-2xs',
      md: 'h-5 text-xs',
      lg: 'h-6 text-sm',
      xl: 'h-7 text-md',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'filled',
    color: 'black',
    fullWidth: false,
    size: 'md',
  },
});

const badgeStyle = cn('inline-block', {
  variants: {
    size: {
      xs: 'leading-3',
      sm: 'leading-4',
      md: 'leading-5',
      lg: 'leading-6',
      xl: 'leading-7',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default Badge;
