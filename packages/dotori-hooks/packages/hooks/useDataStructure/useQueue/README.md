# useQueue

- This is a hook that provides the `queue` data structure..

<br/>

## Features

- It provides the `queue` as an `array`, along with the `first` and `last` elements and the total `size` of the queue.
- It also includes functions to `add`, `remove`, and `clear` values.

<br/>

## Types

```typescript
const useQueue: <T>(initialValue?: T[]) => {
  queue: T[];
  first: T;
  last: T;
  size: number;
  add: (value: T) => T;
  remove: () => null;
  clear: () => never[];
};
```

<br/>
