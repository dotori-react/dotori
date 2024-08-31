# getTime

This utility function converts a given time in milliseconds into an object containing the equivalent hours, minutes, seconds, and milliseconds. It also includes the original raw milliseconds value.

## Features

- The `getTime` function takes an input of time in milliseconds and breaks it down into hours, minutes, seconds, and milliseconds.
- The result is returned as an object with the calculated time values.
- The `raw` field contains the original milliseconds value for reference.

## Types

```typescript
export const getTime: (_milliseconds: number) => {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  raw: number;
};
```

## Example

```typescript
// Example 1: Convert 3,600,000 milliseconds (1 hour) to time components
const timeComponents = getTime(3600000);
console.log(timeComponents);
// Output: { hours: 1, minutes: 0, seconds: 0, milliseconds: 0, raw: 3600000 }

// Example 2: Convert 3,650,123 milliseconds (1 hour, 0 minutes, 50 seconds, and 123 milliseconds)
const detailedTime = getTime(3650123);
console.log(detailedTime);
// Output: { hours: 1, minutes: 0, seconds: 50, milliseconds: 123, raw: 3650123 }

// Example 3: Convert 62,500 milliseconds (1 minute, 2 seconds, and 500 milliseconds)
const shortTime = getTime(62500);
console.log(shortTime);
// Output: { hours: 0, minutes: 1, seconds: 2, milliseconds: 500, raw: 62500 }
```
