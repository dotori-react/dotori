import { DarkModeSwitch, Slider, Snackbar, Tooltip } from 'dotori-components';
import { useResize, useTimer } from 'dotori-hooks';

import './App.css';

function App() {
  const timer = useTimer();
  const { boundaryRef, resizeRef } = useResize<HTMLDivElement, HTMLDivElement>();

  return (
    <>
      <h1>Vite + React</h1>
      <div ref={boundaryRef} style={{ width: 500, height: 500, background: 'red' }}>
        <div ref={resizeRef} style={{ width: 300, height: 300, background: 'blue' }}>
          test
        </div>
      </div>
      <DarkModeSwitch />
      <Slider />
      <Tooltip label="tooltip">
        <button>testetst</button>
      </Tooltip>
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
      <Snackbar title="testasdasd" />
    </>
  );
}

export default App;
