import { forwardRef } from 'react';

import { cn, VariantProps } from 'dotori-utils';

import { Paper, type PaperProps } from '@dotori-components/components';

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...props }, ref) => (
  <Paper ref={ref} className={cardStyle({ className })} {...props}>
    {children}
  </Paper>
));

interface CardProps extends PaperProps, VariantProps<typeof cardStyle> {}

const cardStyle = cn('rounded border border-gray-400 bg-gray-0 dark:bg-gray-600 dark:text-gray-200');

export default Card;
