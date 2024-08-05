/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from 'react';

const useDebounceCallback = ({ callback, ...options }: UseDebounceCallbackParams) => {
  const { delay } = { ...defaultOptions, ...options };
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timerIdRef.current !== null) clearTimeout(timerIdRef.current);

      const timerId = setTimeout(() => {
        callback(...args);
        timerIdRef.current = null;
      }, delay);

      timerIdRef.current = timerId;
    },
    [callback, delay],
  );

  useEffect(
    () => () => {
      if (timerIdRef.current !== null) clearTimeout(timerIdRef.current);
    },
    [],
  );

  return debouncedCallback;
};

const defaultOptions = {
  delay: 500,
};

interface UseDebounceCallbackParams extends DebounceOptions {
  callback: (...args: any[]) => void;
}

interface DebounceOptions {
  delay?: number;
}

export default useDebounceCallback;
