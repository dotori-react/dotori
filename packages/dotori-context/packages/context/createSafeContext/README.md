# createSafeContext

- easy to create context

<br/>

## Features

- required `<Provider>`

<br/>

## Types

```typescript
const createSafeContext = <ContextValue>(errorMessage: string) => void;
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

 // error message is require
export const [CountProvider, useCountContext] = createSafeContext<CountContextValue>('CountProvider is required!');

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
  const {count, increment, decrement, set} = useCountContext(); // because of Provider is required!
}

```
