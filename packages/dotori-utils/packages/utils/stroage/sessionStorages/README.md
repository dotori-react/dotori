# sessionStorages

This utility function provides a simple interface for interacting with the browser's `sessionStorage`. It allows you to get, set, and remove data associated with a specified key, with support for parsing and stringifying JSON data.

## Features

- The `sessionStorages` function returns an object with methods for interacting with `sessionStorage`:
  - `get`: Retrieves the value associated with the specified key. If the value is JSON, it will be parsed and returned. If parsing fails, the raw string is returned.
  - `set`: Stores a new value in `sessionStorage` under the specified key. The value is stringified as JSON before storage.
  - `remove`: Removes the value associated with the specified key from `sessionStorage`.
- This utility is generic, allowing you to specify the type of the stored value using TypeScript's generic syntax.

## Types

```typescript
export const sessionStorages: <T = unknown>(
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
const userSessionStorage = sessionStorages<string>('userSession');
userSessionStorage.set('sessionActive');
const sessionStatus = userSessionStorage.get();
console.log(sessionStatus); // Output: "sessionActive"

// Example 2: Storing and retrieving an object
const sessionDataStorage = sessionStorages<{ userId: string; token: string }>('sessionData');
sessionDataStorage.set({ userId: '12345', token: 'abcde' });
const sessionData = sessionDataStorage.get();
console.log(sessionData); // Output: { userId: '12345', token: 'abcde' }

// Example 3: Removing a value
sessionDataStorage.remove();
const removedSessionData = sessionDataStorage.get();
console.log(removedSessionData); // Output: null
```
