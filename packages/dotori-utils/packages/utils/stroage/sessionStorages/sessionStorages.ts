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
    sessionStorage.setItem(key, JSON.stringify(newValue));

    return true;
  },
  remove() {
    sessionStorage.removeItem(key);

    return true;
  },
});
