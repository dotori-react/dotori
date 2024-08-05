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

export const cacheStorages = <T = unknown>(url: string, key: string, expireTime: number) => ({
  async get() {
    const cacheStorage = await window.caches.open(key);
    const cacheResponse = (await cacheStorage.match(url)) ?? null;

    return cacheResponse;
  },
  async set(value: T) {
    const cacheStorage = await window.caches.open(key);
    const response = new Response(JSON.stringify({ value, expirationTime: Date.now() + expireTime }));

    await cacheStorage.put(url, response);

    return true;
  },
  async remove() {
    await window.caches.delete(key);
    return true;
  },
});
