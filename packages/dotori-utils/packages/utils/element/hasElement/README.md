# hasElement

This utility function checks whether an HTML element with a specific tag name and optional attributes exists within the document.

## Features

- The `hasElement` function allows you to verify the presence of an HTML element by tag name.
- You can optionally specify a set of attributes that the element should match.
- It returns `true` if at least one matching element is found, otherwise `false`.

## Types

```typescript
export const hasElement: <T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  attributes?: HTMLElementProperties<HTMLElementTagNameMap[T]>,
) => boolean;

type HTMLElementProperties<T extends HTMLElement> = {
  [K in keyof T]?: T[K];
};
```

## Example

```typescript
// Example 1: Check if there is any <div> element in the document
const hasDiv = hasElement('div');
console.log(hasDiv); // Output: true or false based on the document content

// Example 2: Check if there is any <input> element with a specific id
const hasInputWithId = hasElement('input', { id: 'username' });
console.log(hasInputWithId); // Output: true if an <input> with id="username" exists, otherwise false

// Example 3: Check if there is any <button> element with a specific class and disabled attribute
const hasDisabledButton = hasElement('button', { className: 'submit-btn', disabled: true });
console.log(hasDisabledButton); // Output: true if a matching <button> exists, otherwise false
```
