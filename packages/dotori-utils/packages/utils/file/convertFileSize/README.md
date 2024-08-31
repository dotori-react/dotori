# convertFileSize

This utility function converts a file size into various units (bytes, kilobytes, megabytes, gigabytes, and terabytes) based on a specified unit. The function uses a predefined set of file size units.

## Features

- The `convertFileSize` function takes a file size in a specified unit and converts it to bytes, kilobytes, megabytes, gigabytes, and terabytes.
- It supports conversions between different file size units defined in the `FILE_UNIT_SIZES` constant.
- The function returns an object containing the size in all supported units.

## Types

```typescript
const FILE_UNIT_SIZES = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'] as const;

export const convertFileSize: (
  size: number,
  unit: (typeof FILE_UNIT_SIZES)[number],
) => {
  byte: number;
  kilobyte: number;
  megabyte: number;
  gigabyte: number;
  terabyte: number;
};
```

## Example

```typescript
// Example: Convert 2 megabytes into all units
const fileSizeInMegabytes = 2;
const convertedSizes = convertFileSize(fileSizeInMegabytes, 'byte');

console.log(convertedSizes);
/*
Output:
{
  byte: 2097152,
  kilobyte: 2048,
  megabyte: 2,
  gigabyte: 0.001953125,
  terabyte: 1.9073486328125e-6
}
*/
```
