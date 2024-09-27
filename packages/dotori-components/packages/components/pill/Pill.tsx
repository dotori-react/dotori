import { cn, VariantProps } from 'dotori-utils';

import { CloseButton } from '@dotori-components/components';

const Pill = ({ children, size, color, withCloseButton, onClose }: PillProps) => (
  <span className={pillStyle({ size, color })}>
    {children}
    {withCloseButton && (
      <CloseButton
        className={closeButtonStyle({ theme: 'light' })}
        size={size}
        withoutHoverColor
        withoutPadding
        onClick={onClose}
      />
    )}
  </span>
);

interface PillProps extends VariantProps<typeof pillStyle> {
  children: React.ReactNode;
  withCloseButton?: boolean;
  onClose?: () => void;
}

const pillStyle = cn(
  'inline-flex items-center gap-1 rounded-md px-2 align-middle overflow-hidden box-border text-gray-200',
  {
    variants: {
      color: {
        black: 'bg-gray-900 hover:bg-black border-gray-900',
        blue: 'bg-blue-600 hover:bg-blue-700 border-blue-600',
        gray: 'bg-gray-600 hover:bg-gray-700 border-gray-600',
        green: 'bg-green-600 hover:bg-green-700 border-green-600',
        red: 'bg-red-600 hover:bg-red-700 border-red-600',
        yellow: 'bg-yellow-600 hover:bg-yellow-700 border-yellow-600',
      },
      size: {
        xs: 'h-4 text-3xs',
        sm: 'h-5 text-2xs',
        md: 'h-6 text-xs',
        lg: 'h-7 text-sm',
        xl: 'h-8 text-md',
      },
    },
    defaultVariants: {
      color: 'black',
      size: 'sm',
    },
  },
);

const closeButtonStyle = cn('', {
  variants: {
    theme: {
      light: 'fill-gray-0',
      dark: 'fill-gray-900',
    },
  },
});

export default Pill;
