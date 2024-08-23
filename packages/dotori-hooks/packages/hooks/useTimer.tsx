import { useRef, useState } from 'react';

import { getDisplayTime, getTime } from 'dotori-utils';

import { useInterval } from '@dotori-hooks/hooks';

const useTimer = () => {
  const [time, setTime] = useState(defaultTime);
  const [laps, setLaps] = useState<string[]>([]);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const elapsedTimeRef = useRef(0);

  const { interval, clear } = useInterval();

  const start = () => {
    const now = new Date();

    timerIdRef.current = interval({
      callback: () => {
        const next = new Date();

        setTime(getTime(elapsedTimeRef.current + (next.getTime() - now.getTime())));
      },
      ms: 1,
      options: {
        exitOnExist: true,
      },
    });
  };

  const stop = () => {
    clear();
    elapsedTimeRef.current = time.raw;
  };

  const reset = () => {
    clear();
    elapsedTimeRef.current = 0;

    setTime(defaultTime);
    lapsReset();
  };

  const split = () => {
    setLaps(prev => [...prev, getDisplayTime(time.raw)]);
  };

  const lapsReset = () => {
    setLaps([]);
  };

  return {
    time,
    displayTime: getDisplayTime(time.raw),
    laps,
    start,
    stop,
    reset,
    split,
    lapsReset,
  };
};

const defaultTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  raw: 0,
};

export default useTimer;
