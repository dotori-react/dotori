# range

- This is a utility function that allows you to change a `value` within specified `minimum` and `maximum` limits.

<br/>

## Features

- The `range` utility function is useful for constraining a number to be within a certain range.
- It ensures that the returned value is never less than the minimum limit and never more than the maximum limit.

<br/>

## Types

````typescript
const range: (value: number, min: number, max: number) => number;
```

<br/>

## Example

```typescript
const constrainedValue = range(15, 10, 20);
console.log(constrainedValue); // Output: 15

const belowMin = range(5, 10, 20);
console.log(belowMin); // Output: 10

const aboveMax = range(25, 10, 20);
console.log(aboveMax); // Output: 20
````
