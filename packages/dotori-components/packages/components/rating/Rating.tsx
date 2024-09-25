import { useState } from 'react';

import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

const Rating = ({ total, size, count, onChange }: RatingProps) => {
  const [selectStarCount, setSelectStarCount] = useState(0);
  const [hoverStarCount, setHoverStarCount] = useState(0);

  const controlledSelectedStarCount = count === undefined ? selectStarCount : count;

  const handleStarClick = (e: React.MouseEvent) => {
    const element = e.currentTarget as HTMLElement & { dataset: { count: string } };

    setSelectStarCount(+element.dataset.count);
    if (onChange) onChange(+element.dataset.count);
  };

  const handleStarEnter = (e: React.MouseEvent) => {
    const element = e.currentTarget as HTMLElement & { dataset: { count: string } };

    setHoverStarCount(+element.dataset.count);
  };

  const handleStarLeave = () => {
    setHoverStarCount(0);
  };

  return (
    <span className="inline-flex">
      {Array.from({ length: total }).map((_, idx) => (
        <Icon
          key={idx + 1}
          data-count={idx + 1}
          icon="star"
          className={starStyle({
            size,
            selected: idx + 1 <= controlledSelectedStarCount,
            hovered: idx + 1 <= hoverStarCount,
            lastHovered: idx + 1 === hoverStarCount,
          })}
          onClick={handleStarClick}
          onMouseEnter={handleStarEnter}
          onMouseLeave={handleStarLeave}
        />
      ))}
    </span>
  );
};

interface RatingProps extends VariantProps<typeof starStyle> {
  total: number;
  count?: number;
  onChange?: (count: number) => void;
}

const starStyle = cn('box-content cursor-pointer rounded-md fill-gray-200', {
  variants: {
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-7 w-7',
      xl: 'h-8 w-8',
    },
    selected: {
      true: 'fill-yellow-600',
      false: '',
    },
    hovered: {
      true: 'fill-yellow-600',
      false: '',
    },
    lastHovered: {
      true: 'scale-110',
      false: '',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export default Rating;
