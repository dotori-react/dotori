import { useState } from 'react';

import { useCreateElement, useElementRect, useHover, useOutSideClick } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { Portal, ClonedChildren } from '@dotori-components/components';

const TinyModal = ({ children, label, position = 'top', gap = 10, color, className, type }: TinyModalProps) => {
  const { hovered, ref: hoveredRef } = useHover();
  const [clicked, setClicked] = useState(false);

  const trigger = type === 'tooltip' ? hovered : clicked;

  const targetRef = useOutSideClick(() => setClicked(false));
  const {
    ref: elementRectRef,
    width: elementWidth,
    height: elementHeight,
    left: elementLeft,
    top: elementTop,
  } = useElementRect(trigger);
  const {
    ref: tinyModalRectRef,
    width: tinyModalWidth,
    height: tinyModalHeight,
  } = useElementRect<HTMLDivElement>(trigger);

  useCreateElement([{ tagName: 'div', attributes: { id: type } }]);

  const combinedRef = (node: HTMLDivElement) => {
    hoveredRef(node);
    elementRectRef.current = node;
    targetRef.current = node;
  };

  const tinyModalPositionMap = {
    bottom: { left: elementLeft + elementWidth / 2 - tinyModalWidth / 2, top: elementTop + elementHeight + gap },
    top: { left: elementLeft + elementWidth / 2 - tinyModalWidth / 2, top: elementTop - tinyModalHeight - gap },
    left: { left: elementLeft - tinyModalWidth - gap, top: elementTop + elementHeight / 2 - tinyModalHeight / 2 },
    right: { left: elementLeft + elementWidth + gap, top: elementTop + elementHeight / 2 - tinyModalHeight / 2 },
  };

  return (
    <>
      {trigger && (
        <Portal target={document.getElementById(type) as HTMLElement}>
          <div className="tw-preflight">
            <div
              ref={tinyModalRectRef}
              className={tinyModalStyle({ color, className })}
              style={tinyModalPositionMap[position]}>
              <span>{label}</span>
              <span className={tinyModalArrowStyle({ position })} />
            </div>
          </div>
        </Portal>
      )}
      <div>
        <ClonedChildren ref={combinedRef} onClick={() => setClicked(prev => !prev)}>
          {children}
        </ClonedChildren>
      </div>
    </>
  );
};

export interface TinyModalProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'color'>,
    VariantProps<typeof tinyModalStyle> {
  label: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  gap?: number;
  type: 'tooltip' | 'popover';
}

const tinyModalStyle = cn('absolute z-[2] text-pretty rounded-md px-4 py-2', {
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

const tinyModalArrowStyle = cn('absolute z-[2] h-2 w-2 rotate-45 rounded-none bg-inherit', {
  variants: {
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
});

export default TinyModal;
