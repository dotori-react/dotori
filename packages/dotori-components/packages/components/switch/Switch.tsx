import { useDisClosure, useElementRect } from 'dotori-hooks';
import { cn, VariantProps } from 'dotori-utils';

import { useDarkModeSwitchContext } from './DarkModeSwitch.context';

const Switch = ({ size, checked, on, off, disabled, className }: SwitchProps) => {
  const toggle = () => (checked ? off : on)();
  const { isOpen: isSwitchShow, open: switchShow } = useDisClosure();
  const { ref, width } = useElementRect<HTMLDivElement>();

  const ctx = useDarkModeSwitchContext();

  const { isDarkModeSwitch } = ctx ? { isDarkModeSwitch: ctx.isDarkModeSwitch } : { isDarkModeSwitch: false };

  const toggleCirclePositionMap = {
    on: { left: `calc(100% - ${width}px - ${width / 4}px)` },
    off: { left: width / 4 },
  };

  return (
    <div className="tw-preflight">
      <label className={toggleStyle({ isSwitchShow, size, checked, disabled, className, isDarkModeSwitch })}>
        <input
          aria-label="toggle"
          checked={checked}
          className="appearance-none"
          disabled={disabled}
          type="checkbox"
          onChange={toggle}
        />
        <div className="absolute left-0 top-0 flex h-full w-full px-2 rounded-inherit">
          <div
            ref={ref}
            className={toggleCircleStyle({ isSwitchShow, size, checked, disabled, isDarkModeSwitch })}
            style={toggleCirclePositionMap[checked ? 'on' : 'off']}
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
  ],
  defaultVariants: {
    disabled: false,
    size: 'sm',
    isDarkModeSwitch: false,
    isSwitchShow: false,
  },
});

export default Switch;
