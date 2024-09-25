import { cn, VariantProps } from 'dotori-utils';

import { CloseButton } from '@dotori-components/components';

const Pill = ({ children, size, color, withCloseButton, onClose }: PillProps) => (
  <span className={pillStyle({ size, color, withCloseButton })}>
    {children}
    {withCloseButton && <CloseButton size={size} withoutHoverColor onClick={onClose} />}
  </span>
);

interface PillProps extends VariantProps<typeof pillStyle> {
  children: React.ReactNode;
  withCloseButton?: boolean;
  onClose?: () => void;
}

const pillStyle = cn('inline-flex cursor-default items-center rounded-full text-gray-100', {
  variants: {
    color: {
      black: 'bg-gray-900',
      blue: 'bg-blue-600',
      gray: 'bg-gray-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600',
    },
    size: {
      xs: 'px-2 text-xs',
      sm: 'px-3 text-sm',
      md: 'px-3 text-md',
      lg: 'px-3 text-lg',
      xl: 'px-3 text-xl',
    },
    withCloseButton: {
      true: 'pr-0',
      false: '',
    },
  },
  defaultVariants: {
    color: 'black',
    size: 'sm',
  },
});

export default Pill;
