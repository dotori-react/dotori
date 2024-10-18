import { cn, VariantProps } from 'dotori-utils';

import { ICON_MAP } from '@dotori-icons/constants';

const Icon = ({ fullSize, size, icon, className, ...props }: IconProps) => {
  const IconComponent = ICON_MAP[icon];

  return (
    <span className="tw-preflight w-auto h-full">
      <IconComponent className={iconStyle({ size, fullSize, className })} {...props} />
    </span>
  );
};

interface IconProps extends VariantProps<typeof iconStyle>, React.ComponentPropsWithoutRef<'svg'> {
  icon: keyof typeof ICON_MAP;
}

const iconStyle = cn('', {
  variants: {
    size: {
      '3xs': 'h-1 w-1',
      '2xs': 'h-2 w-2',
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-10 w-10',
      xl: 'h-12 w-12',
      '2xl': 'h-14 w-14',
      '3xl': 'h-16 w-16',
    },
    fullSize: {
      true: 'w-full h-full',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    fullSize: false,
  },
});

export default Icon;
