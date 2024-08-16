# useDoubleClick

- It's execute callback when a double click occurred.

<br/>

## Features

- callback to be executed when a double click occurs.

<br/>

## Types

```typescript
const usePrevious: <T>(value: T) => T | null;
```

<br/>

## Example

```typescript
const App = () => {
  const ref = useDoubleClick(() => console.log('double click'));
  const previousState = usePrevious(state);

  return (
    <button ref={ref}>please click</button>
  )
};
```
