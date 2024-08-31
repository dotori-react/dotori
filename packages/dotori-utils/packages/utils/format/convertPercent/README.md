# convertPercent

This utility function calculates the percentage of a given value (`current`) relative to a total value (`total`).

## Features

- The `convertPercent` function computes the percentage by dividing the `current` value by the `total` value and then multiplying by 100.
- It returns the result as a percentage, which is useful for progress indicators, score calculations, and other scenarios where proportional values are needed.

## Types

```typescript
export const convertPercent: (current: number, total: number) => number;
```

## Example

```typescript
// Example 1: Calculate the percentage of 50 out of 200
const percentValue = convertPercent(50, 200);
console.log(percentValue); // Output: 25

// Example 2: Calculate the percentage of 75 out of 300
const anotherPercentValue = convertPercent(75, 300);
console.log(anotherPercentValue); // Output: 25

// Example 3: Calculate the percentage of 150 out of 300
const percentHalf = convertPercent(150, 300);
console.log(percentHalf); // Output: 50
```
