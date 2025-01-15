# useHorizontalScroll

The useHorizontalScroll hook provides an easy way to implement horizontal scrolling using drag gestures. It is designed for scenarios where a container needs to support smooth and intuitive horizontal scrolling, such as carousels or scrollable content areas.

## Features

- **Drag-to-Scroll**: Enables horizontal scrolling by dragging with the mouse.
- **Cursor Feedback**: Changes the cursor style dynamically (grab, grabbing, or default) based on the dragging state.
- **Smooth Interaction**: Prevents unintended side effects during the drag operation.
- **Customizable**: Returns event handlers that can be attached to any element.

## Example

```ts
import useHorizontalScroll from 'dotori-hooks';

const HorizontalScrollContainer = () => {
  const { containerRef, onDragStart, onDragMove, onDragEnd } = useHorizontalScroll<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        cursor: 'grab',
      }}
    >
      {/* Scrollable content here */}
    </div>
  );
};

export default HorizontalScrollContainer;

```
