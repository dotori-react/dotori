import { useCallback, useEffect, useRef } from 'react';

import type { TimeOptions } from '@dotori-hooks/types';

const useTime = ({ callback = () => {}, ms = 1000, immediate = false, setTimeHandler, clearTime }: UseTimeParams) => {
  const timeId = useRef<NodeJS.Timeout | null>(null);

  const time = useCallback(
    (params: TimeCallbackParams = {}) => {
      const timeParams = {
        callback,
        ms,
        options: { clearOnExist: true, exitOnExist: true },
        ...params,
      };

      if (timeId.current) {
        if (timeParams.options.clearOnExist) clearTime(timeId.current);

        if (timeParams.options.exitOnExist) return null;
      }

      timeId.current = setTimeHandler(() => {
        if (setTimeHandler === setTimeout) timeId.current = null;
        timeParams.callback();
      }, timeParams.ms);

      return timeId.current;
    },
    [callback, clearTime, ms, setTimeHandler],
  );

  const clear = () => {
    if (!timeId.current) return;

    clearTime(timeId.current);
    timeId.current = null;
  };

  useEffect(() => {
    if (!immediate) return undefined;
    timeId.current = setInterval(callback, ms);

    return () => {
      if (timeId.current) clearTime(timeId.current);
    };
  }, [callback, clearTime, immediate, ms]);

  return {
    time,
    clear,
  };
};

export interface UseTimeParams {
  callback?: () => void;
  ms?: number;
  immediate?: boolean;
  setTimeHandler: typeof setInterval | typeof setTimeout;
  clearTime: typeof clearInterval | typeof clearTimeout;
}

export interface TimeCallbackParams extends Pick<Partial<UseTimeParams>, 'callback' | 'ms'> {
  options?: TimeOptions;
}

export default useTime;
