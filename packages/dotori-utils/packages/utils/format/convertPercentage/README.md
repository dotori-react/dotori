# convertPercentage

This utility function calculates the percentage of a given value (`current`) relative to a total value (`total`) and returns it as a string formatted with a percentage symbol (`%`).

## Features

- The `convertPercentage` function computes the percentage by dividing the `current` value by the `total` value, multiplying by 100, and appending a `%` symbol.
- The result is returned as a string, making it immediately usable in contexts where a percentage format is required (e.g., CSS styles, display purposes).

## Types

```typescript
export const convertPercentage: (current: number, total: number) => string;
```

## Example

```typescript
// Example 1: Calculate the percentage of 50 out of 200
const percentString = convertPercentage(50, 200);
console.log(percentString); // Output: "25%"

// Example 2: Calculate the percentage of 75 out of 300
const anotherPercentString = convertPercentage(75, 300);
console.log(anotherPercentString); // Output: "25%"

// Example 3: Calculate the percentage of 150 out of 300
const percentHalfString = convertPercentage(150, 300);
console.log(percentHalfString); // Output: "50%"
```
