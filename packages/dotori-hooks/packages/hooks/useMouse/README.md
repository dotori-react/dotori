# useScroll

:::warning

This hook is in the **experimental** stage.

:::

- This is a hook that provides the `X` and `Y` coordinates of the mouse within the browser viewport.

<br/>

## Features

- It provides a `ref` to track the mouse position within a specific element, and if no element is referenced, it provides the mouse position within the document.

- It offers the `X` and `Y` coordinates of the mouse.

<br/>

## Types

```typescript
const useMouse: <T extends HTMLElement>() => {
  x: number;
  y: number;
  ref: React.MutableRefObject<T | null>;
};
```

<br/>
