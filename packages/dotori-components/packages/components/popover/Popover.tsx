import { useState } from 'react';

import { useCreateElement, useElementRect, useOutSideClick } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { Portal, ClonedChildren } from '@dotori-components/components';

const Popover = ({ children, label, position = 'top', gap = 10, color, className }: PopoverProps) => {
  const [clicked, setClicked] = useState(false);
  const targetRef = useOutSideClick(() => setClicked(false));
  const {
    ref: elementRectRef,
    width: elementWidth,
    height: elementHeight,
    left: elementLeft,
    top: elementTop,
  } = useElementRect<HTMLDivElement>(clicked);
  const { ref: popoverRectRef, width: popoverWidth, height: popoverHeight } = useElementRect(clicked);

  useCreateElement([{ tagName: 'div', attributes: { id: 'popover' } }]);

  const combinedPopoverRef = (node: HTMLDivElement) => {
    popoverRectRef.current = node;
    targetRef.current = node;
  };

  const popoverPositionMap = {
    bottom: { left: elementLeft + elementWidth / 2 - popoverWidth / 2, top: elementTop + elementHeight + gap },
    top: { left: elementLeft + elementWidth / 2 - popoverWidth / 2, top: elementTop - popoverHeight - gap },
    left: { left: elementLeft - popoverWidth - gap, top: elementTop + elementHeight / 2 - popoverHeight / 2 },
    right: { left: elementLeft + elementWidth + gap, top: elementTop + elementHeight / 2 - popoverHeight / 2 },
  };

  return (
    <>
      {clicked && (
        <Portal target={document.getElementById('popover') as HTMLElement}>
          <div
            ref={combinedPopoverRef}
            className={popoverStyle({ color, className, visible: !!popoverRectRef.current })}
            style={popoverPositionMap[position]}>
            <span>{label}</span>
            <span className={popoverArrowStyle({ color, visible: !!popoverRectRef.current, position })} />
          </div>
        </Portal>
      )}
      <div>
        <ClonedChildren ref={elementRectRef} onClick={() => setClicked(prev => !prev)}>
          {children}
        </ClonedChildren>
      </div>
    </>
  );
};

interface PopoverProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'color'>, VariantProps<typeof popoverStyle> {
  label: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  gap?: number;
}

const popoverStyle = cn('absolute z-[2] text-pretty rounded-md px-4 py-2', {
  variants: {
    color: {
      black: 'border-gray-900 bg-gray-100 text-gray-900',
      blue: 'border-blue-600 bg-blue-600 text-gray-100',
      gray: 'border-gray-600 bg-gray-600 text-gray-100',
      green: 'border-green-600 bg-green-600 text-gray-100',
      red: 'border-red-600 bg-red-600 text-gray-100',
      yellow: 'border-yellow-600 bg-yellow-600 text-gray-100',
    },
    visible: {
      true: 'visible',
      false: 'invisible',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
});

const popoverArrowStyle = cn('absolute z-[2] h-2 w-2 rotate-45 rounded-none', {
  variants: {
    color: {
      black: 'bg-gray-100',
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

export default Popover;
