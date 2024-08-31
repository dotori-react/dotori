# useElementRect

:::warning

This hook is in the **experimental** stage.

:::

- This is a hook that provides information obtained through the `getBoundingClientRect()` method and the `position` of a specific element.

<br/>

## Features

- It provides the initial `width` of the element and the `offsetWidth` after applying styles.
- It provides the initial `height` of the element and the `offsetHeight` after applying styles.
- It provides the `offsetLeft` position relative to the parent element, as well as the `left` position within the entire viewport.
- It provides the `offsetLeft` position relative to the parent element, as well as the `left` position within the entire viewport.
- It provides the `offsetTop` position relative to the parent element, as well as the `top` position within the entire viewport.

<br/>

## Types

```typescript
const useElementRect: <T extends HTMLElement>(
  refresh?: boolean,
) => {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
  left: number;
  top: number;
  offsetLeft: number;
  offsetTop: number;
  ref: React.MutableRefObject<T | null>;
};
```

<br/>
