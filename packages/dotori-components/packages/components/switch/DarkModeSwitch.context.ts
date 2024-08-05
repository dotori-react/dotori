import { createOptionalContext } from 'dotori-context';

interface DarkModeSwitchContextValue {
  isDarkModeSwitch: boolean;
}

export const [DarkModeSwitchProvider, useDarkModeSwitchContext] = createOptionalContext<DarkModeSwitchContextValue>();
