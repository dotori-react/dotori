import { useDarkMode } from 'dotori-hooks';

import { DarkModeSwitchProvider } from './DarkModeSwitch.context';
import Switch, { type SwitchProps } from './Switch';

const DarkModeSwitch = (props: Omit<SwitchProps, 'checked' | 'off' | 'on' | 'children'>) => {
  const { isDark, on, off } = useDarkMode();

  return (
    <DarkModeSwitchProvider value={{ isDarkModeSwitch: true }}>
      <Switch {...props} checked={isDark} off={off} on={on} />
    </DarkModeSwitchProvider>
  );
};

export default DarkModeSwitch;
