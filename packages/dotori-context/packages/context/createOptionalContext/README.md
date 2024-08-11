# createOptionalContext

- easy to create context

<br/>

## Features

- optional `<Provider>`

<br/>

## Types

```typescript
const createOptionalContext = <ContextValue>(initialValue: ContextValue | null = null) => void;
```

<br/>

## Example

```typescript
// Count.context.ts
interface CountContextValue {
  count: number;
  increment: () => void;
  decrement: () => void;
  set: (_count: number) => void;
}

export const [CountProvider, useCountContext] = createOptionalContext<CountContextValue>();

// App.tsx
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const set = (_count: number) => setCount(prev => prev + _count);

  // ...
  return (
    <CountProvider value={{count, increment, decrement, set}}>
      <ChildComponent />
    </CountProvider>
  )
}

// ChildComponent.tsx
const ChildComponent = () => {
  const ctx = useCountContext();

  const ctxProps = ctx ? {count, increment, decrement, set} : {} // because of Provider is optional!
}

```
