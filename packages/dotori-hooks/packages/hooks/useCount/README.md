# useCount

- easy to use counter

<br/>

## Features

- you can plus or minus number, set specific number to use returned functions
- if you add min and max options, then count number matched

<br/>

## Types

```typescript
interface UseCountParams {
  initialCount?: number;
  min?: number;
  max?: number;
  callback?: (count: number) => void;
}

const useCount: ({ initialCount, min, max, callback }: UseCountParams) => {
  count: number;
  increment: () => void;
  decrement: () => void;
  set: (_count: number) => void;
  reset: () => void;
};
```

<br/>

## Example

```typescript
const App = () => {
  const { count, increment, decrement, set, reset } = useCount({ min: 5, max: 10 });

  return (
    <button onClick={increment}>count up</button>
    <button onClick={decrement}>count down</button>
    <button onClick={() => set(7)}>count set 7</button>
    <button onClick={reset}>reset</button>
    <p>{count}</p>
  )
}


```
