import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTimer } from 'dotori-hooks';

function App() {
  const [count, setCount] = useState(0);
  const timer = useTimer();
  // console.log(timer);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={timer.start}>count is {timer.displayTime}</button>
        <button onClick={timer.stop}>stop</button>
        <button onClick={timer.split}>split</button>
        <button onClick={timer.reset}>reset</button>
        <button onClick={timer.lapsReset}>lapsReset</button>
        <button>{JSON.stringify(timer.time)}</button>
        <div>{JSON.stringify(timer.laps)}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
