export const localStorages = <T = unknown>(key: string) => ({
  get() {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) return null;

    try {
      const parsedValue = JSON.parse(storedValue) as T;
      return parsedValue;
    } catch (error) {
      return storedValue as T;
    }
  },
  set(newValue: T) {
    localStorage.setItem(key, JSON.stringify(newValue));

    return true;
  },
  remove() {
    localStorage.removeItem(key);

    return true;
  },
});
