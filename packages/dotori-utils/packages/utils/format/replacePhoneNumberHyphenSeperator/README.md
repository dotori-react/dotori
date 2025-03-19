# replacePhoneNumberSplittedHyphen

This utility function formats a given numeric string into a hyphen-separated phone number format.

## Features

- Converts a numeric string into a standard phone number format (`XXX-XXXX-XXXX` or `XXX-XXX-XXXX`).
- Automatically removes non-numeric characters.
- Prevents trailing hyphens when the input is incomplete.

## Types

```typescript
export const replacePhoneNumberSplittedHyphen: (text: string) => string;
```

## Example

```ts
import { replacePhoneNumberSplittedHyphen } from './utils';

// Example: Format a basic phone number
console.log(replacePhoneNumberSplittedHyphen('01012345678'));
// Output: "010-1234-5678"

// Example: Handle existing hyphens
console.log(replacePhoneNumberSplittedHyphen('010-1234-5678'));
// Output: "010-1234-5678"

// Example: Remove non-numeric characters
console.log(replacePhoneNumberSplittedHyphen('(010) 1234 5678'));
// Output: "010-1234-5678"

// Example: Handle short numbers
console.log(replacePhoneNumberSplittedHyphen('010123'));
// Output: "010-123"

// Example: Remove trailing hyphens
console.log(replacePhoneNumberSplittedHyphen('010-'));
// Output: "010"
```

## Usage

This function is useful for formatting user-inputted phone numbers in forms or applications that require standardized phone number formats.
