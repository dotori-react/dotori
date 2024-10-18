import { useState } from 'react';

import { useCreateElement, useElementRect, useOutSideClick } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { Portal } from '@dotori-components/components';

const Dropdown = ({
  children,
  color,
  contents,
  gap = 10,
  fullWidth,
  isOpen,
  disabled,
  open,
  close,
  onDropdownClick,
}: DropdownProps) => {
  const [clicked, setClicked] = useState(false);
  const targetRef = useOutSideClick(() => {
    setClicked(false);
    if (close) close();
  });

  const controlledClicked = isOpen !== undefined ? isOpen : clicked;

  const {
    ref: dropdownRef,
    width: dropdownWidth,
    height: dropdownHeight,
    left: dropdownLeft,
    top: dropdownTop,
  } = useElementRect<HTMLButtonElement>(controlledClicked);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(prev => !prev);
    if (open) open();
    if (onDropdownClick) onDropdownClick(e);
  };

  useCreateElement([{ tagName: 'div', attributes: { id: 'dropdown' } }]);

  return (
    <>
      {controlledClicked && (
        <Portal target={document.getElementById('dropdown') as HTMLElement}>
          <span className="tw-preflight">
            <span
              ref={targetRef}
              className={dropdownStyle({ color })}
              style={{
                left: dropdownLeft,
                top: dropdownTop + dropdownHeight + gap,
                width: fullWidth ? dropdownWidth : 'auto',
              }}>
              {contents}
            </span>
          </span>
        </Portal>
      )}
      <div className="tw-preflight">
        <button
          ref={dropdownRef}
          className={dropdownContainerStyle({ disabled })}
          disabled={disabled}
          onClick={handleButtonClick}>
          {children}
        </button>
      </div>
    </>
  );
};

interface DropdownProps extends VariantProps<typeof dropdownStyle> {
  children: React.ReactNode;
  contents: React.ReactNode;
  gap?: number;
  isOpen?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  close?: () => void;
  open?: () => void;
  onDropdownClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const dropdownContainerStyle = cn('inline-block w-full cursor-pointer text-start', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const dropdownStyle = cn('absolute z-[2] text-pretty rounded-md border px-4 py-2', {
  variants: {
    color: {
      white: 'border-gray-200 bg-gray-0 text-gray-900',
      black: 'border-gray-900 bg-gray-0 text-gray-900',
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
    color: 'white',
  },
});

export default Dropdown;
