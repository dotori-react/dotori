import { useEffect, useRef, useState } from 'react';

import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

const Checkbox = ({ label, size, indeterminate = false, checked: isChecked, onChange }: CheckboxProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState(false);

  const controlledChecked = isChecked !== undefined ? isChecked : checked;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) onChange(e);
  };

  useEffect(() => {
    if (!ref.current) return;

    ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label className="inline-flex cursor-pointer items-center justify-center gap-3">
      <input
        ref={ref}
        aria-checked={indeterminate ? 'mixed' : controlledChecked}
        checked={controlledChecked}
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      {indeterminate ? (
        <Icon
          aria-label="checkbox icon"
          className={checkboxStyle({ indeterminate, checked: controlledChecked, size })}
          icon="checkIndeterminate"
        />
      ) : (
        <Icon aria-label="checkbox icon" className={checkboxStyle({ checked: controlledChecked, size })} icon="check" />
      )}
      {label && <span className={iconStyle({ size })}>{label}</span>}
    </label>
  );
};

interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>,
    Omit<VariantProps<typeof checkboxStyle>, 'checked'> {
  label?: string;
  indeterminate?: boolean;
}

const checkboxStyle = cn('box-content rounded-md border', {
  variants: {
    checked: {
      true: 'bg-blue-400 fill-gray-0 hover:bg-gray-400',
      false: 'border-gray-500 fill-none hover:bg-gray-200',
    },
    indeterminate: {
      true: 'bg-blue-400 fill-gray-0 hover:bg-gray-400',
      false: '',
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
    size: 'sm',
    indeterminate: false,
  },
});

const iconStyle = cn('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export default Checkbox;
