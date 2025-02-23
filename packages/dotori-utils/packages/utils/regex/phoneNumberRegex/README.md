# phoneNumberRegex

This utility function formats a given numeric string into a hyphen-separated phone number format.

## Features

- Extracts only numeric characters from a given string.
- Formats numbers into a standard phone number format (`XXX-XXXX-XXXX` or `XXX-XXX-XXXX`).
- Removes trailing hyphens to ensure a clean output.

## Types

```typescript
export const phoneNumberRegex: (text: string) => string;
```

## Example

```ts
import { phoneNumberRegex } from './utils';

// Example: Format a basic phone number
console.log(phoneNumberRegex('01012345678'));
// Output: "010-1234-5678"

// Example: Handle existing hyphens
console.log(phoneNumberRegex('010-1234-5678'));
// Output: "010-1234-5678"

// Example: Remove non-numeric characters
console.log(phoneNumberRegex('(010) 1234 5678'));
// Output: "010-1234-5678"

// Example: Handle short numbers
console.log(phoneNumberRegex('010123'));
// Output: "010-123"

// Example: Remove trailing hyphens
console.log(phoneNumberRegex('010-'));
// Output: "010"
```

## Usage

This function is useful for formatting user-inputted phone numbers in forms or applications that require standardized phone number formats.
