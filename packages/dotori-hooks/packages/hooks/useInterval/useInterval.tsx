import { useCallback, useEffect, useRef } from 'react';

import { TimeOptions } from '@dotori-hooks/types';

const useInterval = ({ callback = () => {}, ms = 1000, immediate = false }: UseIntervalParams = {}) => {
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const interval = useCallback(
    (params: IntervalCallbackParams = {}) => {
      const intervalParams = {
        callback,
        ms,
        options: { clearOnExist: true, exitOnExist: true },
        ...params,
      };

      if (intervalId.current) {
        if (intervalParams.options.clearOnExist) clearInterval(intervalId.current);

        if (intervalParams.options.exitOnExist) return null;
      }

      intervalId.current = setInterval(() => {
        intervalParams.callback();
        intervalId.current = null;
      }, intervalParams.ms);

      return intervalId.current;
    },
    [callback, ms],
  );

  const clear = () => {
    if (!intervalId.current) return;

    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  useEffect(() => {
    if (!immediate) return undefined;
    intervalId.current = setInterval(callback, ms);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [callback, immediate, ms]);

  return {
    interval,
    clear,
  };
};

interface UseIntervalParams {
  callback?: () => void;
  ms?: number;
  immediate?: boolean;
}

interface IntervalCallbackParams extends Omit<Partial<UseIntervalParams>, 'immediate'> {
  options?: TimeOptions;
}

export default useInterval;
