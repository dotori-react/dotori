# useResize

:::warning

This hook is in the **experimental** stage.

:::

- This is a hook that provides functionality to resize an element.

<br/>

## Features

- The useResize hook returns an object containing boundaryRef and resizeRef.

- resizeRef should reference the element whose size will be changed, while boundaryRef should reference the parent element that bounds the size of the element being resized.
- The element referenced by resizeRef can only be expanded up to the maximum size of the element referenced by boundaryRef."

<br/>

## Types

```typescript
interface UseResizeOptions {
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

const useResize: <BoundaryElement extends HTMLElement, ResizeElement extends HTMLElement>(
  options?: UseResizeOptions,
) => {
  boundaryRef: React.MutableRefObject<BoundaryElement | null>;
  resizeRef: React.MutableRefObject<ResizeElement | null>;
};
```

<br/>

## Example

```typescript
const Snackbar = (/**...**/) => {
  const { boundaryRef, resizeRef } = useResize<HTMLDivElement, HTMLDivElement>();

  return (
    <div ref={boundaryRef} style={{ width: 500, height: 500, background: 'red' }}>
      <div ref={resizeRef} style={{ width: 300, height: 300, background: 'blue' }}>
        test
      </div>
    </div>
  )
};
```
