import { useRef, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [displayedTimer, setDisPlayedTimer] = useState('00:00:000');
  const [laps, setLaps] = useState<string[]>([]);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const ellipseTimeRef = useRef(0);

  const start = () => {
    if (timerIdRef.current) return;

    const now = new Date();

    const timerId = setInterval(() => {
      const next = new Date();
      const { time, displayTime } = getTimer(ellipseTimeRef.current + (next.getTime() - now.getTime()) / 1000);

      setTimer(time);
      setDisPlayedTimer(displayTime);
    }, 10);

    timerIdRef.current = timerId;
  };

  const stop = () => {
    if (!timerIdRef.current) return;

    clearInterval(timerIdRef.current);
    ellipseTimeRef.current = timer;
    timerIdRef.current = null;
  };

  const reset = () => {
    if (timerIdRef.current) clearInterval(timerIdRef.current);

    timerIdRef.current = null;
    ellipseTimeRef.current = 0;

    setTimer(0);
    setDisPlayedTimer('00:00:000');
    setLaps([]);
  };

  const split = () => {
    setLaps([...laps, displayedTimer]);
  };

  return {
    timer,
    displayedTimer,
    laps,
    start,
    stop,
    reset,
    split,
  };
};

const getTimer = (time: number) => {
  const [integer, decimal] = time.toFixed(3).split('.').map(Number);

  const minutes = `${Math.floor(integer / 60)}`.padStart(2, '0');
  const seconds = `${Math.floor(integer % 60)}`.padStart(2, '0');
  const milliseconds = `${decimal}`.padEnd(3, '0');

  return {
    time,
    displayTime: `${minutes}:${seconds}:${milliseconds}`,
  };
};

export default Timer;
