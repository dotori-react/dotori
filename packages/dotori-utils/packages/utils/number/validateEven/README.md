# validateEven

- This is a utility function that checks whether a given number is even.

<br/>

## Features

- The `validateEven` utility function returns a boolean value.
- It determines if the provided number is even (`true`) or odd (`false`).

<br/>

## Types

```typescript
export const validateEven: (num: number) => boolean;
```

<br/>

## Example

```typescript
const isEven = validateEven(4);
console.log(isEven); // Output: true

const isOdd = validateEven(7);
console.log(isOdd); // Output: false
```
