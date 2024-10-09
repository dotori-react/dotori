import { forwardRef } from 'react';

import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ withoutHoverColor, icon, color, size, withoutPadding, className, ...rest }, ref) => (
    <button className={actionIconStyle({ color, withoutHoverColor, className })} {...rest} ref={ref}>
      <Icon className={iconStyle({ size, withoutPadding })} icon={icon} />
    </button>
  ),
);

export interface ActionIconProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'color'>,
    VariantProps<typeof actionIconStyle>,
    VariantProps<typeof iconStyle> {
  icon: React.ComponentProps<typeof Icon>['icon'];
}

const actionIconStyle = cn('rounded-sm bg-transparent p-0 border-none outline-none', {
  variants: {
    color: {
      black: 'fill-gray-900 hover:bg-gray-100',
      blue: 'fill-blue-600 hover:bg-blue-100',
      gray: 'fill-gray-600 hover:bg-gray-100',
      green: 'fill-green-600 hover:bg-green-100',
      red: 'fill-red-600 hover:bg-red-100',
      yellow: 'fill-yellow-600 hover:bg-yellow-100',
    },
    withoutHoverColor: {
      true: 'hover:bg-transparent',
      false: 'hover:bg-gray-200',
    },
  },
  defaultVariants: {
    color: 'gray',
    withoutHoverColor: false,
  },
});

const iconStyle = cn('box-content active:translate-y-[1px]', {
  variants: {
    size: {
      xs: 'h-2 w-2 p-2',
      sm: 'h-3 w-3 p-2',
      md: 'h-4 w-4 p-2',
      lg: 'h-5 w-5 p-2',
      xl: 'h-6 w-6 p-3',
    },
    withoutPadding: {
      true: 'p-0',
      false: '',
    },
  },
  defaultVariants: {
    size: 'sm',
    withoutPadding: false,
  },
});

export default ActionIcon;
