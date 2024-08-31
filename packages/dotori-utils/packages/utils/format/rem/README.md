# rem

This utility function converts a pixel value to its equivalent rem (root em) value, based on a root font size of 16 pixels.

## Features

- The `rem` function converts a pixel value to a rem value, which is often used in responsive web design.
- It assumes a base font size of 16 pixels, which is the default root font size in most browsers.

## Types

```typescript
export const rem: (px: number) => number;
```

## Example

```typescript
// Example: Convert 32 pixels to rem
const remValue = rem(32);
console.log(remValue); // Output: 2

// Example: Convert 16 pixels to rem
const remValueFor16px = rem(16);
console.log(remValueFor16px); // Output: 1
```
