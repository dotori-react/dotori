# escapeRegex

- This is a utility function that escapes special characters in a string, making it safe to use in regular expressions.

<br/>

## Features

- The `escapeRegex` utility function ensures that special characters in a string are properly escaped.
- It replaces characters like `-`, `[`, `]`, `{`, `}`, `(`, `)`, `*`, `+`, `?`, `.`, `,`, `\`, `^`, `$`, `|`, and `#` with their escaped versions to prevent unintended behavior in regular expressions.

<br/>

## Types

```typescript
export const escapeRegex: (value: string) => string;
```

<br/>

## Example

```typescript
const safeString = escapeRegex('hello. (world)*');
console.log(safeString); // Output: hello\. \(world\)\*

const regex = new RegExp(safeString);
console.log(regex.test('hello. (world)*')); // Output: true
```
