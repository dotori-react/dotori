# usePrevious

- easy to use previous state

<br/>

## Features

- require pass state value in usePrevious

<br/>

## Types

```typescript
const usePrevious: <T>(value: T) => T | null;
```

<br/>

## Example

```typescript
const App = () => {
  const [state, setState] = useState(50);
  const previousState = usePrevious(state);

  return (
    <div>{state}</div>
    <div>{previousState}</div>
    <button onClick={() => setState(prev => prev + 1)}>increment</button>
  )
};
```
