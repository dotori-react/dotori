import { forwardRef, useEffect, useRef, useState } from 'react';

import { cn, VariantProps } from 'dotori-utils';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { size, leftIcon, rightIcon, className, disabled, defaultFocused, placeholder, type, onBlur, onFocus, ...rest },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const combinedFocused = defaultFocused || focused;

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(!focused);
      if (onFocus) onFocus(e);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(!focused);
      if (onBlur) onBlur(e);
    };

    useEffect(() => {
      if (combinedFocused && inputRef.current) inputRef.current.focus();
    }, [combinedFocused]);

    return (
      <label className="tw-preflight w-full">
        <label className={inputContainerStyle({ className, disabled, focused: combinedFocused })}>
          {leftIcon && <span className={iconStyle({ size })}>{leftIcon}</span>}
          <input
            ref={node => {
              // eslint-disable-next-line no-param-reassign
              if (ref && typeof ref !== 'function') ref.current = node;
              inputRef.current = node;
            }}
            className={inputStyle({ disabled, size })}
            disabled={disabled}
            placeholder={placeholder}
            type={type}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            {...rest}
          />
          {type === 'file' && <span>{placeholder}</span>}
          {rightIcon && <span className={iconStyle({ size })}>{rightIcon}</span>}
        </label>
      </label>
    );
  },
);

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>,
    Omit<VariantProps<typeof inputStyle>, 'disabled'>,
    Omit<VariantProps<typeof inputContainerStyle>, 'disabled' | 'type'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  defaultFocused?: boolean;
}

const inputContainerStyle = cn('flex cursor-text items-center gap-1 rounded border border-gray-200 px-3 py-2', {
  variants: {
    focused: {
      true: 'border-blue-600',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed bg-gray-100',
      false: '',
    },
    type: {
      file: 'cursor-pointer text-gray-400',
      text: '',
    },
  },
});

const inputStyle = cn('w-full px-3 placeholder:text-gray-400 outline-none', {
  variants: {
    size: {
      xs: 'h-4 text-xs',
      sm: 'h-6 text-sm',
      md: 'h-7 text-md',
      lg: 'h-8 text-lg',
      xl: 'h-10 text-xl',
    },
    disabled: {
      true: 'cursor-not-allowed bg-gray-100',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
  },
});

const iconStyle = cn('inline-flex items-center justify-center', {
  variants: {
    size: {
      xs: 'h-4',
      sm: 'h-6',
      md: 'h-7',
      lg: 'h-8',
      xl: 'h-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default Input;
