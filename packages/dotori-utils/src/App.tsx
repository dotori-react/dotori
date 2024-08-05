import { validateEven } from '@/utils';

const App = () => {
  const isEven = validateEven(0);

  return <>0 is even? : {JSON.stringify(isEven)}</>;
};

export default App;
