import { useState } from 'react';

import { useInterval } from 'dotori-hooks';
import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

const Ellipsis = ({
  circleTotal = 10,
  firstDelay = 5,
  lastDelay = 5,
  showedCircleTotal = 3,
  slow = 100,
  size,
}: EllipsisProps) => {
  const [count, setCount] = useState(-firstDelay);

  const circleTotalArray = Array.from({ length: circleTotal });

  useInterval({
    callback: () => {
      const maxDelay = circleTotal + showedCircleTotal + lastDelay;

      setCount(prev => (prev === maxDelay ? -firstDelay : prev + 1));
    },
    milliseconds: slow,
  });

  return (
    <div className="flex h-10 items-center justify-center">
      <div className="relative w-full">
        <div className="absolute z-0 h-[1px] w-full border border-dashed border-transparent border-b-red-200" />
        <div className="absolute flex h-full w-full items-center justify-between">
          {circleTotalArray.map((_, idx) => (
            <Icon key={idx} className={circleDonutIconStyle({ isBackground: true })} icon="circle" />
          ))}
        </div>
        <div className="absolute z-[1px] flex h-full w-full items-center justify-between transition-opacity">
          {circleTotalArray.map((_, idx) => (
            <div key={idx}>
              <Icon
                icon="circle"
                className={circleDonutIconStyle({
                  isShow: idx + 1 <= count && count < idx + 1 + showedCircleTotal,
                  size,
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface EllipsisProps extends Omit<VariantProps<typeof circleDonutIconStyle>, 'isShow'> {
  circleTotal?: number;
  showedCircleTotal?: number;
  firstDelay?: number; // s
  lastDelay?: number; // s
  slow?: number; // ms
}

const circleDonutIconStyle = cn('rounded-full ', {
  variants: {
    isBackground: {
      true: 'fill-gray-300',
      false: 'border-6 border-red-600 fill-gray-100',
    },
    isShow: {
      true: 'opacity-100',
      false: 'opacity-0',
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
    isBackground: false,
    size: 'lg',
  },
});

export default Ellipsis;
