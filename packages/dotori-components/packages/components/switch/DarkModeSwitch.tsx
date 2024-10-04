import { useDarkMode } from 'dotori-hooks';

import { DarkModeSwitchProvider } from './DarkModeSwitch.context';
import Switch, { type SwitchProps } from './Switch';

const DarkModeSwitch = ({ on, off, ...rest }: Partial<Omit<SwitchProps, 'checked' | 'children'>>) => {
  const { isDark, on: darkOn, off: darkOff } = useDarkMode();

  const switchOn = () => {
    darkOn();
    if (on) on();
  };
  const switchOff = () => {
    darkOff();
    if (off) off();
  };

  return (
    <DarkModeSwitchProvider value={{ isDarkModeSwitch: true }}>
      <Switch {...rest} checked={isDark} off={switchOff} on={switchOn} />
    </DarkModeSwitchProvider>
  );
};

export default DarkModeSwitch;
