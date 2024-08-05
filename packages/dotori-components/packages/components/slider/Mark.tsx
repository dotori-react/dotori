import { cn, VariantProps, convertPercentage } from 'dotori-utils';

const Mark = ({ value, min, max, label, size }: MarkProps) => {
  const markStyle = {
    left: convertPercentage(value - min, max - min),
  };

  return (
    <>
      {min <= value && value <= max && (
        <div className="absolute top-1/2 select-none" style={markStyle}>
          <div className={markCircleStyle({ size })} />
          <div className="-translate-x-1/2 pt-2">{label}</div>
        </div>
      )}
    </>
  );
};

export interface MarkProps extends VariantProps<typeof markCircleStyle> {
  value: number;
  label: string;
  min: number;
  max: number;
}

const markCircleStyle = cn('-translate-x-1/2 -translate-y-1/2 scale-90 rounded-full bg-white', {
  variants: {
    size: {
      xs: 'h-2 w-2',
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default Mark;
