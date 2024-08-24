# useScrollbarWidth

- This is a hook that retrieves the `width` of the globally set scrollbar in the browser window.

<br/>

## Features

- You can retrieve the width of the scrollbar.

<br/>

## Types

```typescript
const useScrollbarWidth: () => number;
```

<br/>

## Example

```typescript
const TableCols = (/**...**/) => {
  const scrollbarWidth = useScrollbarWidth();

  return (
    // ...
    <th style={{ width: `${scrollbarWidth}px` }} />
  )
};
```
