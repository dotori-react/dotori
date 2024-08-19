# usePrevious

- This hook executes a callback function when clicking outside of a modal or dropdown element

<br/>

## Features

- When you pass the ref returned by the useOutsideClick hook to a specific element, the callback function provided to the hook will be executed when clicking outside that element.

<br/>

## Types

```typescript
const useOutSideClick: <T extends HTMLElement>(callback: () => void) => (node: T | null) => void;
```

<br/>

## Example

```typescript
const App = () => {
  const ref = useOutSideClick(() => console.log('out side click!'))

  return (
    <div ref={ref}>modal</div>
  )
};
```
