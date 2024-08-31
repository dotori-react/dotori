# localStorages

This utility function provides a simple interface for interacting with the browser's `localStorage`. It allows you to get, set, and remove data associated with a specified key, with support for parsing and stringifying JSON data.

## Features

- The `localStorages` function returns an object with methods for interacting with `localStorage`:
  - `get`: Retrieves the value associated with the specified key. If the value is JSON, it will be parsed and returned. If parsing fails, the raw string is returned.
  - `set`: Stores a new value in `localStorage` under the specified key. The value is stringified as JSON before storage.
  - `remove`: Removes the value associated with the specified key from `localStorage`.
- This utility is generic, allowing you to specify the type of the stored value using TypeScript's generic syntax.

## Types

```typescript
export const localStorages: <T = unknown>(
  key: string,
) => {
  get: () => T | null;
  set: (newValue: T) => boolean;
  remove: () => boolean;
};
```

## Example

```typescript
// Example 1: Storing and retrieving a simple string
const userSettingsStorage = localStorages<string>('userSettings');
userSettingsStorage.set('darkMode');
const setting = userSettingsStorage.get();
console.log(setting); // Output: "darkMode"

// Example 2: Storing and retrieving an object
const preferencesStorage = localStorages<{ theme: string; notifications: boolean }>('preferences');
preferencesStorage.set({ theme: 'dark', notifications: true });
const preferences = preferencesStorage.get();
console.log(preferences); // Output: { theme: 'dark', notifications: true }

// Example 3: Removing a value
preferencesStorage.remove();
const removedPreferences = preferencesStorage.get();
console.log(removedPreferences); // Output: null
```
