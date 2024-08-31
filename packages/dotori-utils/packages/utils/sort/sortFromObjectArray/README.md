# sortFromObjectArray

This utility function sorts an array of objects based on a specified key and order. It handles sorting for both strings and numbers and provides options for ascending or descending order.

## Features

- The `sortFromObjectArray` function allows you to sort an array of objects by a specified key.
- Supports sorting in both ascending (`asc`) and descending (`desc`) order.
- Handles cases where the key is `undefined`, `null`, or the key's value in the object is `null`.
- Can sort values that are either strings or numbers.

## Types

```typescript
export const sortFromObjectArray: <T extends object>({ array, key, order }: SortFromObjectArrayParams<T>) => T[];

type SortFromObjectArrayParams<T> = {
  array: T[];
  key: keyof T;
  order: 'asc' | 'desc';
};
```

## Example

```typescript
// Example 1: Sort an array of objects by a numeric key in ascending order
const data = [
  { id: 3, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Charlie' },
];
const sortedById = sortFromObjectArray({ array: data, key: 'id', order: 'asc' });
console.log(sortedById);
// Output: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Charlie' }, { id: 3, name: 'Alice' }]

// Example 2: Sort an array of objects by a string key in descending order
const sortedByNameDesc = sortFromObjectArray({ array: data, key: 'name', order: 'desc' });
console.log(sortedByNameDesc);
// Output: [{ id: 2, name: 'Charlie' }, { id: 1, name: 'Bob' }, { id: 3, name: 'Alice' }]

// Example 3: Handle cases where key or values are null or undefined
const dataWithNulls = [
  { id: 3, name: null },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Charlie' },
];
const sortedWithNulls = sortFromObjectArray({ array: dataWithNulls, key: 'name', order: 'asc' });
console.log(sortedWithNulls);
// Output: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Charlie' }, { id: 3, name: null }]
```
