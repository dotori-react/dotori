# useInterval

- This is a hook that provides functions related to JavaScript's `setInterval`.

<br/>

## Features

- You can provide the options `clearOnExist` and `exitOnExist` to control how to handle an already running `setInterval`.

- Note that both `clearOnExist` and `exitOnExist` cannot be set to false simultaneously.
- It accepts a `callback` function and a delay time in `ms`, just like `setInterval`.
- You can set it to execute after the DOM render by providing a boolean value to `immediate`.
- The `callback` and `ms` passed to the hook are set as default values for the returned `interval`, but they can be overridden with a new `callback` and delay time in `ms` for the interval."

<br/>

## Types

```typescript
type TimeOptions = { clearOnExist: true; exitOnExist?: boolean } | { clearOnExist?: boolean; exitOnExist: true };

interface UseTimeParams {
  callback?: () => void;
  ms?: number;
  immediate?: boolean;
  setTimeHandler: typeof setInterval | typeof setTimeout;
  clearTime: typeof clearInterval | typeof clearTimeout;
}

interface TimeCallbackParams extends Pick<Partial<UseTimeParams>, 'callback' | 'ms'> {
  options?: TimeOptions;
}

const useInterval: (params?: Omit<UseTimeParams, 'setTimeHandler' | 'clearTime'>) => {
  interval: (params?: TimeCallbackParams) => NodeJS.Timeout | null;
  clear: () => void;
};
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
    ms: slow,
    immediate: true,
  });
};
```
