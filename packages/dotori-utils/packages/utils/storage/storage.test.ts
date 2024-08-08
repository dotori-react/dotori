import { Response } from 'node-fetch';

import { cacheStorages, localStorages, sessionStorages } from '@dotori-utils/utils';

describe('localStorage util test', () => {
  it('should return null when no value is set in localStorage', () => {
    const darkModeStorage = localStorages<boolean>('darkMode');

    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });

  it('should store and retrieve a value(boolean) in localStorage', () => {
    const darkModeStorage = localStorages<boolean>('darkMode');

    darkModeStorage.set(false);
    expect(darkModeStorage.get()).toBe(false);

    darkModeStorage.set(true);
    expect(darkModeStorage.get()).toBe(true);

    darkModeStorage.remove();
  });

  it('should remove the value from localStorage', () => {
    const darkModeStorage = localStorages<boolean>('darkMode');

    darkModeStorage.set(true);
    darkModeStorage.remove();
    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });
});

describe('sessionStorage util test', () => {
  it('should return null when no value is set in sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });

  it('should store and retrieve a value(boolean) in sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    darkModeStorage.set(false);
    expect(darkModeStorage.get()).toBe(false);

    darkModeStorage.set(true);
    expect(darkModeStorage.get()).toBe(true);

    darkModeStorage.remove();
  });

  it('should remove the value from sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    darkModeStorage.set(true);
    darkModeStorage.remove();
    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });

  it('should remove when closed session from sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    darkModeStorage.set(true);

    window.sessionStorage.clear();

    expect(darkModeStorage.get()).toBe(null);
  });
});
