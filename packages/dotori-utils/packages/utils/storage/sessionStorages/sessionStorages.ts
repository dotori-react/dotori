export const sessionStorages = <T = unknown>(key: string) => ({
  get() {
    const storedValue = sessionStorage.getItem(key);

    if (storedValue === null) return null;

    try {
      const parsedValue = JSON.parse(storedValue) as T;
      return parsedValue;
    } catch (error) {
      return storedValue as T;
    }
  },
  set(newValue: T) {
    const convertedValue = typeof newValue === 'string' ? newValue : JSON.stringify(newValue);
    sessionStorage.setItem(key, convertedValue);

    return true;
  },
  remove() {
    sessionStorage.removeItem(key);

    return true;
  },
});
