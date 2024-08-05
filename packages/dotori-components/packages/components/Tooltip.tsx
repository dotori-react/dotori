import { useCreateElement, useElementRect, useHover } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { Portal, ClonedChildren } from '@/components';

const Tooltip = ({ children, label, position = 'top', gap = 10, color, className }: TooltipProps) => {
  const { hovered, ref: hoveredRef } = useHover();
  const {
    ref: elementRectRef,
    width: elementWidth,
    height: elementHeight,
    left: elementLeft,
    top: elementTop,
  } = useElementRect(hovered);
  const { ref: tooltipRectRef, width: tooltipWidth, height: tooltipHeight } = useElementRect<HTMLDivElement>(hovered);

  useCreateElement([{ tagName: 'div', attributes: { id: 'tooltip' } }]);

  const combinedRef = (node: HTMLDivElement) => {
    hoveredRef.current = node;
    elementRectRef.current = node;
  };

  const tooltipPositionMap = {
    bottom: { left: elementLeft + elementWidth / 2 - tooltipWidth / 2, top: elementTop + elementHeight + gap },
    top: { left: elementLeft + elementWidth / 2 - tooltipWidth / 2, top: elementTop - tooltipHeight - gap },
    left: { left: elementLeft - tooltipWidth - gap, top: elementTop + elementHeight / 2 - tooltipHeight / 2 },
    right: { left: elementLeft + elementWidth + gap, top: elementTop + elementHeight / 2 - tooltipHeight / 2 },
  };

  return (
    <>
      {hovered && (
        <Portal target={document.getElementById('tooltip') as HTMLElement}>
          <div ref={tooltipRectRef} className={tooltipStyle({ color, className })} style={tooltipPositionMap[position]}>
            <span>{label}</span>
            <span className={tooltipArrowStyle({ color, position })} />
          </div>
        </Portal>
      )}
      <div>
        <ClonedChildren ref={combinedRef}>
          <span>{children}</span>
        </ClonedChildren>
      </div>
    </>
  );
};

interface TooltipProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'color'>, VariantProps<typeof tooltipStyle> {
  label: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  gap?: number;
}

const tooltipStyle = cn('absolute z-[2] text-pretty rounded-md px-4 py-2', {
  variants: {
    color: {
      black: 'border-gray-900 bg-gray-900 text-gray-100',
      white: 'border-gray-100 bg-gray-100 text-gray-900',
      blue: 'border-blue-600 bg-blue-600 text-gray-100',
      gray: 'border-gray-600 bg-gray-600 text-gray-100',
      green: 'border-green-600 bg-green-600 text-gray-100',
      red: 'border-red-600 bg-red-600 text-gray-100',
      yellow: 'border-yellow-600 bg-yellow-600 text-gray-100',
    },
  },
  defaultVariants: {
    color: 'black',
  },
});

const tooltipArrowStyle = cn('absolute z-[2] h-2 w-2 rotate-45 rounded-none', {
  variants: {
    color: {
      black: 'bg-gray-900',
      white: 'bg-gray-100',
      blue: 'bg-blue-600',
      gray: 'bg-gray-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600',
    },
    visible: {
      true: 'visible',
      false: 'invisible',
    },
    position: {
      left: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2',
      right: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
      top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      bottom: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
});

export default Tooltip;
