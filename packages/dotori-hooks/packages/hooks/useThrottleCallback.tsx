/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from 'react';

const useThrottleCallback = ({ callback, ...options }: UseThrottleCallbackParams) => {
  const { delay, leading, leadingDelay } = { ...defaultOptions, ...options };
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallTimeRef = useRef<number | null>(null);

  const throttleCallback = useCallback(
    (...args: any[]) => {
      const now = Date.now();
      const isLeading =
        timerIdRef.current === null &&
        leading &&
        (lastCallTimeRef.current === null || now - lastCallTimeRef.current >= leadingDelay);

      if (isLeading) {
        callback(...args);
        lastCallTimeRef.current = now;
      }

      if (timerIdRef.current !== null) return;

      const timerId = setTimeout(() => {
        callback(...args);
        timerIdRef.current = null;
        lastCallTimeRef.current = Date.now();
      }, delay);

      timerIdRef.current = timerId;
    },
    [callback, delay, leading, leadingDelay],
  );

  useEffect(
    () => () => {
      if (timerIdRef.current !== null) clearTimeout(timerIdRef.current);
    },
    [],
  );

  return throttleCallback;
};

const defaultOptions = {
  delay: 500,
  leading: false,
  leadingDelay: 1000,
};

interface UseThrottleCallbackParams extends ThrottleOptions {
  callback: (...args: any[]) => void;
}

interface ThrottleOptions {
  delay?: number;
  leading?: boolean;
  leadingDelay?: number;
}

export default useThrottleCallback;
