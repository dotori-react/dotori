import { useEffect } from 'react';

import { useDarkModeStore } from '@dotori-hooks/store';

const useDarkMode = () => {
  const { isDark, on, off, toggle } = useDarkModeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  return { isDark, on, off, toggle };
};

export default useDarkMode;
