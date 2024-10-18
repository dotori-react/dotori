import { useCallback, useEffect, useState } from 'react';

import { useElementRect, useHover } from 'dotori-hooks';
import { cn, VariantProps, convertPercent, convertPercentage, range } from 'dotori-utils';

import Mark, { type MarkProps } from './Mark';
import Thumb from './Thumb';

const Slider = ({
  defaultValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  color,
  size,
  className,
  showThumb = true,
  marks,
  onChange,
  onMouseDown,
  ...rest
}: SliderProps) => {
  const { ref: hoverRef, hovered } = useHover();
  const { ref: rectRef, ...rect } = useElementRect<HTMLDivElement>();
  const [sliderValue, setSliderValue] = useState(defaultValue ?? min);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const defaultStep = getDefaultStep(step);
  const controlledValue = value === undefined ? sliderValue : value;
  const filledWidthPercentage = convertPercentage(controlledValue - min < 0 ? 0 : controlledValue - min, max - min);

  const combineSliderContainerRef = (element: HTMLDivElement) => {
    hoverRef(element);
    rectRef.current = element;
  };

  const setSliderValueByRange = useCallback(
    (currentSliderValue: number) => {
      const percent = convertPercent(currentSliderValue, rect.width);
      const newSliderValue = ((max - min) * percent) / 100 + min;
      const formattedByStepValue = Math.round(newSliderValue / defaultStep) * defaultStep;
      const rangeValue = range(formattedByStepValue, min, max);

      setSliderValue(rangeValue);
      if (onChange) onChange(rangeValue);
    },
    [rect.width, max, min, defaultStep, onChange],
  );

  const handleSliderContainerMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onMouseDown) onMouseDown(e);

    const currentSliderValue = e.clientX - rect.left;

    setIsMouseDown(true);
    setSliderValueByRange(currentSliderValue);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(+e.target.value);
    if (onChange) onChange(+e.target.value);
  };

  useEffect(() => {
    const mouseUp = () => {
      setIsMouseDown(false);
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;

      const currentSliderValue = e.clientX - rect.left;

      setSliderValueByRange(currentSliderValue);
    };

    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousemove', mouseMove);

    return () => {
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [isMouseDown, rect.left, setSliderValueByRange]);

  return (
    <div className="tw-preflight">
      <div className={sliderLayoutStyle({ size })}>
        <div className={sliderStyle({ color })} style={{ width: filledWidthPercentage }} />
        <div
          ref={combineSliderContainerRef}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={value}
          className={sliderContainerStyle({ className, size })}
          role="slider"
          tabIndex={-1}
          onMouseDown={handleSliderContainerMouseDown}
          {...rest}>
          <Thumb
            isShow={showThumb && (hovered || isMouseDown)}
            label={controlledValue.toString()}
            percentage={filledWidthPercentage}>
            <div className={sliderCircleStyle({ size, isMouseDown, color })} style={{ left: filledWidthPercentage }} />
          </Thumb>
          {marks?.map(mark => <Mark key={mark.value} {...mark} max={max} min={min} size={size} />)}
          <input
            className="hidden"
            max={max}
            min={min}
            step={defaultStep}
            type="range"
            value={controlledValue}
            onChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'color' | 'onChange'>,
    Pick<MarkProps, 'size'>,
    VariantProps<typeof sliderStyle> {
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  showThumb?: boolean;
  onChange?: (value: number) => void;
  marks?: Pick<MarkProps, 'value' | 'label'>[];
}

const sliderLayoutStyle = cn('relative rounded bg-gray-100', {
  variants: {
    size: {
      xs: 'px-2',
      sm: 'px-2.5',
      md: 'px-3',
      lg: 'px-3.5',
      xl: 'px-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const sliderContainerStyle = cn('relative mb-10 block w-full cursor-pointer rounded-sm', {
  variants: {
    size: {
      xs: 'h-3',
      sm: 'h-4',
      md: 'h-5',
      lg: 'h-6',
      xl: 'h-7',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const sliderStyle = cn('absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full cursor-pointer', {
  variants: {
    color: {
      black: 'bg-gray-900',
      blue: 'bg-blue-600',
      gray: 'bg-gray-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600',
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

const sliderCircleStyle = cn(
  'absolute top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none rounded-full',
  {
    variants: {
      color: {
        black: 'border-2 border-gray-900 bg-white',
        blue: 'border-2 border-blue-600 bg-white',
        gray: 'border-2 border-gray-600 bg-white',
        green: 'border-2 border-green-600 bg-white',
        red: 'border-2 border-red-600 bg-white',
        yellow: 'border-2 border-yellow-600 bg-white',
      },
      size: {
        xs: 'h-6 w-6',
        sm: 'h-7 w-7',
        md: 'h-8 w-8',
        lg: 'h-9 w-9',
        xl: 'h-10 w-10',
      },
      isMouseDown: {
        true: 'scale-125',
        false: 'scale-100',
      },
    },
    defaultVariants: {
      color: 'gray',
      size: 'md',
    },
  },
);

const getDefaultStep = (step: number) => (step <= 0 ? 1 : step);

export default Slider;
