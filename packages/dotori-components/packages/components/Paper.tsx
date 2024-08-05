import { forwardRef } from 'react';

import { cn, VariantProps } from 'dotori-utils';

const Paper = forwardRef<HTMLDivElement, PaperProps>(({ size, className, children, fullWidth, ...props }, ref) => (
  <div ref={ref} className={paperStyle({ size, fullWidth, className })} {...props}>
    {children}
  </div>
));
export interface PaperProps extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof paperStyle> {}

const paperStyle = cn('bg-white p-[10px]', {
  variants: {
    size: {
      xs: 'w-xs',
      sm: 'w-sm',
      md: 'w-md',
      lg: 'w-lg',
      xl: 'w-xl',
    },
    fullWidth: {
      true: '!w-full',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: false,
  },
});

export default Paper;
