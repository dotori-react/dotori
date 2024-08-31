# measureTime

This utility function measures the time taken to execute a given synchronous or asynchronous callback function. It returns the elapsed time in milliseconds.

## Features

- The `measureTime` function can measure the execution time of both synchronous and asynchronous functions.
- It uses the `performance.now()` method to get high-resolution timestamps before and after the callback execution.
- The function returns the elapsed time in milliseconds as a `number`.

## Types

```typescript
export const measureTime: (callback: () => void | Promise<void>) => Promise<number>;
```

## Example

```typescript
// Example 1: Measure the time taken by a synchronous function
function syncTask() {
  for (let i = 0; i < 1000000; i++) {
    // Simulate a time-consuming task
  }
}
measureTime(syncTask).then(time => console.log(`Synchronous task took ${time}ms`));
// Output: Synchronous task took Xms (depending on the task)

// Example 2: Measure the time taken by an asynchronous function
async function asyncTask() {
  return new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second async task
}
measureTime(asyncTask).then(time => console.log(`Asynchronous task took ${time}ms`));
// Output: Asynchronous task took 2000ms

// Example 3: Measure the time taken by an async function with an await
async function complexTask() {
  await asyncTask(); // Simulate a complex task with async operations
}
measureTime(complexTask).then(time => console.log(`Complex async task took ${time}ms`));
// Output: Complex async task took 2000ms
```
