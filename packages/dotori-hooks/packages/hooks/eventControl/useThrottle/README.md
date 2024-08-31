# useThrottle

- Implement hook to provide `throttle` functionality for delaying function execution

<br/>

## Features

- The hook accepts a `callback` function and a delay `ms` as options.
- It also provides an `immediate` option to execute the provided callback function immediately after the DOM rendering.
- Additionally, the options passed to the hook as parameters can be redefined as options in the returned `throttle` function.

<br/>

## Types

```typescript
interface UseTimeParams {
  callback?: () => void;
  ms?: number;
  immediate?: boolean;
  setTimeHandler: typeof setInterval | typeof setTimeout;
  clearTimeHandler: typeof clearInterval | typeof clearTimeout;
  options?: TimeOptions;
}

interface UseTimeoutParams extends Omit<UseTimeParams, 'setTimeHandler' | 'clearTimeHandler'> {}

const useThrottle: (params?: Omit<UseTimeoutParams, 'options'>) => {
  throttle: (throttleParams?: Omit<UseTimeoutParams, 'options'>) => void;
  clear: () => void;
};
```

<br/>

## Example

```typescript
const App = () => {
  const [random, setRandom] = useState(0);

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setRandom(randomNumber);
  };

  const { throttle } = useDebounce({ callback: getRandomNumber });


  return (
    <button onClick={throttle}>throttle randomNumber call! randomNumber: {random}</button>
  )
};
```
