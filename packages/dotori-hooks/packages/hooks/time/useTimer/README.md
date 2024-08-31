# useTimeout

- This is a hook that provides timer-related information

<br/>

## Features

- It provides hours, minutes, seconds, milliseconds, the raw state of milliseconds, laps, and time information in string format for display.
- It also includes functions for starting the timer, pausing it, resetting the time and laps, creating laps, and resetting laps.

<br/>

## Types

```typescript
interface UseTimeoutParams {
  callback: () => void;
  milliseconds: number;
}

const useTimer: () => {
  time: {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    raw: number;
  };
  displayTime: string;
  laps: string[];
  start: () => void;
  stop: () => void;
  reset: () => void;
  split: () => void;
  lapsReset: () => void;
};
```

<br/>

## Example

```typescript
const Snackbar = (/**...**/) => {
  const { isOpen, close } = useDisClosure(true);
  useTimeout({ callback: close, milliseconds: delay });
};
```
