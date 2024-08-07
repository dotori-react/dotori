import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@dotori-hooks/constants';

const useDarkModeStore = create<DarkModeStore>()(
  persist(
    set => ({
      isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
      on: () => set(() => ({ isDark: true })),
      off: () => set(() => ({ isDark: false })),
      toggle: () => set(state => ({ isDark: !state.isDark })),
    }),
    { name: STORAGE_KEYS.DARK_MODE, storage: createJSONStorage(() => localStorage) },
  ),
);

export default useDarkModeStore;

interface DarkModeStore {
  isDark: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
}
