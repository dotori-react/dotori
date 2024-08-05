import { useState } from 'react';

import { CountProvider, useCountContext } from './context/count';

const Parent = () => <Children />;

const Children = () => {
  const ctx = useCountContext();

  const ctxProps = ctx || {};

  return (
    <div>
      <h1>Count: {ctxProps.count}</h1>

      <button onClick={ctxProps.increment}>증가</button>
      <button onClick={ctxProps.decrement}>감소</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CountProvider value={{ count, increment, decrement }}>
      <Parent />
    </CountProvider>
  );
};

export default App;
