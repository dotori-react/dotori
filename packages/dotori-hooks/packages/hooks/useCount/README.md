# useCount

- The useCount hook provides a simple and flexible way to manage a numeric counter state. It offers features for incrementing, decrementing, setting, and resetting the count value. Additionally, it supports controlled and uncontrolled modes, making it suitable for various use cases.

<br/>

## Features

- **Controlled and Uncontrolled States**: Allows managing state internally or passing a controlled value.
- **Min/Max Constraints**: Supports optional `min` and `max` constraints for the counter.
- **Utility Functions**: Provides functions like `increment`, `decrement`, `set`, and `reset` for state management.

<br/>

## Types

```typescript
interface UseCountParams {
  controlledCount?: number;
  initialCount: number;
  min?: number;
  max?: number;
}

const useCount: ({ controlledCount: _controlledCount, initialCount, min, max }: UseCountParams) => {
  count: number;
  increment: () => number;
  decrement: () => number;
  set: (_count: number) => number;
  reset: () => number;
};
```

<br/>

## Example

### Basic Example

```typescript
import React, { useState } from 'react';
import useCount from './path/to/useCount';

const CounterComponent = () => {
  const { count, increment, decrement, set, reset } = useCount({ initialCount: 0 });

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => set(5)}>Set to 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
```

### Controlled Example

```typescript
import React, { useState } from 'react';
import useCount from './path/to/useCount';

const ControlledCounter = () => {
  const [controlledCount, setControlledCount] = useState(10);
  const { count, increment, decrement } = useCount({
    controlledCount,
    initialCount: 0,
  });

  return (
    <div>
      <h1>Controlled Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

```
