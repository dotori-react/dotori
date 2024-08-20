# useInterval

- You can use `setInterval` as a hook.

<br/>

## Features

- It accepts a callback function and milliseconds as parameters, allowing it to be used in the same way as the `setInterval` method.

<br/>

## Types

```typescript
interface UseIntervalParams {
  callback: () => void;
  milliseconds: number;
}

const useInterval: ({ callback, milliseconds }: UseIntervalParams) => void;
```

<br/>

## Example

```typescript
const Ellipsis = ({
  circleTotal = 10,
  firstDelay = 5,
  lastDelay = 5,
  showedCircleTotal = 3,
  slow = 100,
  size,
}: EllipsisProps) => {
  const [count, setCount] = useState(-firstDelay);

  const circleTotalArray = Array.from({ length: circleTotal });

  useInterval({
    callback: () => {
      const maxDelay = circleTotal + showedCircleTotal + lastDelay;

      setCount(prev => (prev === maxDelay ? -firstDelay : prev + 1));
    },
    milliseconds: slow,
  });
};
```
