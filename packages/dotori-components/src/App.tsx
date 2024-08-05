import { useDarkMode } from 'dotori-hooks';

import { DarkModeSwitch, Switch } from '@/components';

const App = () => {
  const darkMode = useDarkMode();

  return (
    <div className="dark:bg-gray-0">
      <DarkModeSwitch size="md" />
      <Switch checked={darkMode.isDark} off={darkMode.off} on={darkMode.on} size="xl" />
    </div>
  );
};

export default App;
