import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

const CloseButton = ({ withoutHoverColor, size, className, ...rest }: CloseButtonProps) => (
  <button {...rest} className={closeButtonStyle({ withoutHoverColor })}>
    <Icon className={closeIconStyle({ size, className })} icon="close" />
  </button>
);

interface CloseButtonProps extends React.ComponentPropsWithoutRef<'button'>, VariantProps<typeof closeIconStyle> {
  withoutHoverColor?: boolean;
}

const closeButtonStyle = cn('rounded-sm', {
  variants: {
    withoutHoverColor: {
      true: 'hover:bg-transparent',
      false: 'hover:bg-gray-200',
    },
  },
  defaultVariants: {
    withoutHoverColor: false,
  },
});

const closeIconStyle = cn('box-content active:translate-y-[1px]', {
  variants: {
    size: {
      xs: 'h-2 w-2 p-2',
      sm: 'h-3 w-3 p-2',
      md: 'h-4 w-4 p-2',
      lg: 'h-5 w-5 p-2',
      xl: 'h-6 w-6 p-3',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export default CloseButton;
