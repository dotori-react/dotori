# getDisplayTime

This utility function converts a given time in milliseconds into a formatted string, displaying the time in hours, minutes, seconds, and milliseconds.

## Features

- The `getDisplayTime` function formats a time duration, given in milliseconds, into a string with the format `HH:MM:SS:SSS`.
- It uses the `getTime` function to break down the milliseconds into hours, minutes, seconds, and milliseconds.
- Each component is padded with leading zeros to ensure a consistent two-digit format for hours, minutes, and seconds, and a three-digit format for milliseconds.

## Types

```typescript
export const getDisplayTime: (_milliseconds: number) => string;
```

## Example

```typescript
// Example 1: Convert 3,600,000 milliseconds (1 hour) to a display string
const displayTime = getDisplayTime(3600000);
console.log(displayTime); // Output: "01:00:00:000"

// Example 2: Convert 3,650,123 milliseconds (1 hour, 0 minutes, 50 seconds, and 123 milliseconds)
const detailedDisplayTime = getDisplayTime(3650123);
console.log(detailedDisplayTime); // Output: "01:00:50:123"

// Example 3: Convert 62,500 milliseconds (1 minute, 2 seconds, and 500 milliseconds)
const shortDisplayTime = getDisplayTime(62500);
console.log(shortDisplayTime); // Output: "00:01:02:500"
```
