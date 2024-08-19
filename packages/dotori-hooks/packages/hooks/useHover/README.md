# useHover

- It detect whether an element is hovered

<br/>

## Features

- When you pass a callback ref to an element, events are attached to it, allowing you to detect whether it is being hovered

<br/>

## Types

```typescript
const useHover: <T extends HTMLElement>() => {
  hovered: boolean;
  ref: (node: T | null) => void;
};
```

<br/>

## Example

```typescript
const App = () => {
  const { ref, hovered } = useHover();

  return (
    <div ref={ref}>hover me!</div>
    <p>{JSON.stringify(hovered)}</p>
  )
};
```
