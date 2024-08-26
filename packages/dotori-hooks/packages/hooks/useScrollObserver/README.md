# useScrollObserver

- This hook provides IntersectionObserver functionality.

<br/>

## Features

- It accepts a callback function to be executed when a specific element intersects, and the degree of intersection can be configured through options.

<br/>

## Types

```typescript
interface UseScrollObserverParams {
  callback: () => void;
  options?: IntersectionObserverInit;
}

const useScrollObserver: ({ callback, options }: UseScrollObserverParams) => React.MutableRefObject<null>;
```

<br/>

## Example

```typescript
const App = (/**...**/) => {
  const observerRef = useScrollObserver(() => console.log('intersection!'))

  return (
    <div style={{width: 500, height: 500}} ref={observerRef}></div>
  )
};
```
