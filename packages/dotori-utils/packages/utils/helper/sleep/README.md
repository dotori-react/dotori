# sleep

This utility function creates a delay for a specified amount of time by returning a promise that resolves after the given timer duration.

## Features

- The `sleep` function allows you to introduce a delay in your code execution. It is particularly useful in asynchronous workflows where you need to pause the execution for a certain period.
- The function returns a promise that resolves with the string `'wake!'` after the specified number of milliseconds.

## Types

```typescript
export const sleep: (timer: number) => Promise<string>;
```

## Example

```typescript
// Example 1: Using sleep in an async function
async function delayedAction() {
  console.log('Start sleeping...');
  await sleep(2000); // Sleep for 2 seconds
  console.log('Woke up!');
}

delayedAction();
// Output:
// Start sleeping...
// (2 seconds later)
// Woke up!

// Example 2: Chain sleep with other promises
sleep(1000).then(message => console.log(message)); // Output: 'wake!' after 1 second
```
