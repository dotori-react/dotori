import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

const ActionIcon = ({ icon, color, size, className, ...rest }: ActionIconProps) => (
  <button className={actionIconStyle({ size, color, className })} {...rest}>
    <Icon icon={icon} />
  </button>
);

interface ActionIconProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'color'>,
    VariantProps<typeof actionIconStyle> {
  icon: React.ComponentProps<typeof Icon>['icon'];
}

const actionIconStyle = cn('border-spacing-1 rounded-sm p-1', {
  variants: {
    color: {
      black: 'fill-gray-900 hover:bg-gray-100',
      blue: 'fill-blue-600 hover:bg-blue-100',
      gray: 'fill-gray-600 hover:bg-gray-100',
      green: 'fill-green-600 hover:bg-green-100',
      red: 'fill-red-600 hover:bg-red-100',
      yellow: 'fill-yellow-600 hover:bg-yellow-100',
    },
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-7 w-7',
      xl: 'h-8 w-8',
    },
  },
  defaultVariants: {
    color: 'gray',
    size: 'xl',
  },
});

export default ActionIcon;
