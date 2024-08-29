# useDrag

:::warning

This hook is in the **experimental** stage.

:::

- This is a hook that provides the functionality to move an element by dragging.

<br/>

## Features

- The `useDrag` hook returns an object containing `boundaryRef` and `dragRef`.

- `dragRef` should reference the element that will be moved by dragging, and `boundaryRef` should reference the element that defines the area within which the draggable element can move.

<br/>

## Types

```typescript
const useDrag: <BoundaryElement extends HTMLElement, DragElement extends HTMLElement>() => {
  boundaryRef: any;
  dragRef: any;
};
```

<br/>

## Example

```typescript
const App = (/**...**/) => {
  const { boundaryRef, dragRef } = useDrag<HTMLDivElement, HTMLDivElement>();

  return (
    <div ref={boundaryRef} style={{ width: 500, height: 500, background: 'red' }}>
      <div ref={dragRef} style={{ width: 300, height: 300, background: 'blue' }}>
        test
      </div>
    </div>
  )
};
```
