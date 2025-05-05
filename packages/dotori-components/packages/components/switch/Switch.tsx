import { useEffect } from 'react';

import { useDisClosure } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { useDarkModeSwitchContext } from './DarkModeSwitch.context';

const Switch = ({ size, checked, on, off, disabled, className }: SwitchProps) => {
  const toggle = () => (checked ? off : on)();
  const { isOpen: isSwitchShow, open: switchShow } = useDisClosure();

  const ctx = useDarkModeSwitchContext();

  const { isDarkModeSwitch } = ctx ? { isDarkModeSwitch: ctx.isDarkModeSwitch } : { isDarkModeSwitch: false };

  useEffect(() => {
    switchShow();
  }, [switchShow]);

  return (
    <div className="tw-preflight">
      <label className={toggleStyle({ isSwitchShow, size, checked, disabled, className, isDarkModeSwitch })}>
        <input
          aria-label="toggle"
          checked={checked}
          className="appearance-none invisible"
          disabled={disabled}
          type="checkbox"
          onChange={toggle}
        />
        <div className="absolute left-0 top-0 flex h-full w-full px-2 rounded-inherit">
          <div
            className={toggleCircleStyle({ isSwitchShow, size, checked, disabled, isDarkModeSwitch })}
            onTransitionEnd={switchShow}
          />
        </div>
      </label>
    </div>
  );
};

export interface SwitchProps
  extends Pick<React.ComponentPropsWithoutRef<'input'>, 'disabled' | 'className'>,
    Omit<VariantProps<typeof toggleStyle>, 'disabled'> {
  checked: boolean;
  on: () => void;
  off: () => void;
}

const toggleStyle = cn('relative block rounded-full bg-cover transition-all', {
  variants: {
    size: {
      xs: 'h-6 w-12',
      sm: 'h-8 w-16',
      md: 'h-10 w-24',
      lg: 'h-12 w-32',
      xl: 'h-16 w-40',
    },
    checked: {
      true: 'bg-blue-600',
      false: 'bg-gray-400',
    },
    isDarkModeSwitch: {
      true: '',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed bg-opacity-80 hover:bg-opacity-90',
      false: 'cursor-pointer',
    },
    isSwitchShow: {
      true: 'visible',
      false: 'invisible',
    },
  },
  compoundVariants: [
    { checked: true, isDarkModeSwitch: true, className: 'bg-darkMode-night-background' },
    { checked: false, isDarkModeSwitch: true, className: 'bg-darkMode-light-background' },
  ],
  defaultVariants: {
    disabled: false,
    size: 'sm',
    isDarkModeSwitch: false,
    isSwitchShow: false,
  },
});

const toggleCircleStyle = cn('absolute top-1/2 -translate-y-1/2 rounded-full bg-cover transition-all', {
  variants: {
    size: {
      xs: 'h-4 w-4',
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-9 w-9',
      xl: 'h-12 w-12',
    },
    checked: {
      true: 'bg-gray-0',
      false: 'bg-gray-500',
    },
    isDarkModeSwitch: {
      true: '',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed bg-opacity-80 hover:bg-opacity-90',
      false: 'cursor-pointer',
    },
    isSwitchShow: {
      true: 'visible',
      false: 'invisible',
    },
  },
  compoundVariants: [
    { checked: true, isDarkModeSwitch: true, className: 'bg-darkMode-moon' },
    { checked: false, isDarkModeSwitch: true, className: 'bg-darkMode-sun' },
    { checked: true, size: 'xs', className: `left-[calc(100%-1rem-0.25rem)]` },
    { checked: true, size: 'sm', className: `left-[calc(100%-1.5rem-0.25rem)]` },
    { checked: true, size: 'md', className: `left-[calc(100%-2rem-0.25rem)]` },
    { checked: true, size: 'lg', className: `left-[calc(100%-2.25rem-0.25rem)]` },
    { checked: true, size: 'xl', className: `left-[calc(100%-3rem-0.5rem)]` },
    { checked: false, size: 'xs', className: 'left-1' },
    { checked: false, size: 'sm', className: 'left-1' },
    { checked: false, size: 'md', className: 'left-1' },
    { checked: false, size: 'lg', className: 'left-1' },
    { checked: false, size: 'xl', className: 'left-2' },
  ],
  defaultVariants: {
    disabled: false,
    size: 'sm',
    isDarkModeSwitch: false,
    isSwitchShow: false,
  },
});

export default Switch;
