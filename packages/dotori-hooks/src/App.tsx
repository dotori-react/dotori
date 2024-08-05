import { useCount, useDarkMode } from '@/hooks';

const App = () => {
  const darkmode = useDarkMode();
  const counter = useCount();

  console.log(darkmode);
  console.log(counter);

  return (
    <>
      <button onClick={darkmode.on}>다크모드 ON</button>
      <button onClick={darkmode.off}>다크모드 OFF</button>
    </>
  );
};

export default App;
