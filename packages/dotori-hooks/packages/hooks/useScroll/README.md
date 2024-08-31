# useScroll

:::warning

This hook is in the **experimental** stage.

:::

- This is a hook that provides information about the scroll position.

<br/>

## Features

- It provides information on whether the current scroll direction is up or down.
- whether the scroll is currently stopped.
- the Y-axis distance moved after the scroll stops from a stationary position.

<br/>

## Types

```typescript
const useScroll: () => {
  isScrollUp: boolean;
  isScrollDown: boolean;
  isScrollStop: boolean;
  movedScrollY: number;
};
```

<br/>
