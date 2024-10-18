import { cn, VariantProps } from 'dotori-utils';

const Indicator = ({ children, color, size, radius, position, animation = 'none' }: IndicatorProps) => {
  const indicatorDynamicStyle = { width: size, height: size };

  return (
    <div className="tw-preflight">
      <span className="relative inline-flex">
        {children}
        <span className={indicatorStyle({ color, radius, position, animation })} style={indicatorDynamicStyle} />
      </span>
    </div>
  );
};

interface IndicatorProps extends VariantProps<typeof indicatorStyle> {
  children: React.ReactNode;
  size: number;
}

const indicatorStyle = cn('absolute', {
  variants: {
    color: {
      black: 'bg-gray-600',
      blue: 'bg-blue-500',
      gray: 'bg-gray-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500',
    },
    radius: {
      xs: 'rounded',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-full',
    },
    position: {
      rightTop: 'right-0 top-0 -translate-y-1/2 translate-x-1/2',
      rightBottom: 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
      leftTop: 'left-0 top-0 -translate-x-1/2 -translate-y-1/2',
      leftBottom: 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
      top: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
      bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      left: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
      right: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2',
    },
    animation: {
      pulse: 'animate-pulse',
      none: '',
    },
  },
  defaultVariants: {
    color: 'green',
    radius: 'xl',
    position: 'rightTop',
    animation: 'none',
  },
});

export default Indicator;
