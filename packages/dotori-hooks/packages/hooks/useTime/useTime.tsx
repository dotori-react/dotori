import { useCallback, useEffect, useRef } from 'react';

import type { TimeOptions } from '@dotori-hooks/types';

const useTime = ({
  callback = () => {},
  ms = 1000,
  immediate = false,
  setTimeHandler,
  clearTimeHandler,
}: UseTimeParams) => {
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
        if (timeParams.options.clearOnExist) clearTimeHandler(timeId.current);

        if (timeParams.options.exitOnExist) return null;
      }

      timeId.current = setTimeHandler(() => {
        if (setTimeHandler === setTimeout) timeId.current = null;
        timeParams.callback();
      }, timeParams.ms);

      return timeId.current;
    },
    [callback, clearTimeHandler, ms, setTimeHandler],
  );

  const clear = () => {
    if (!timeId.current) return;

    clearTimeHandler(timeId.current);
    timeId.current = null;
  };

  useEffect(() => {
    if (!immediate) return undefined;
    timeId.current = setInterval(callback, ms);

    return () => {
      if (timeId.current) clearTimeHandler(timeId.current);
    };
  }, [callback, clearTimeHandler, immediate, ms]);

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
  clearTimeHandler: typeof clearInterval | typeof clearTimeout;
}

export interface TimeCallbackParams extends Pick<Partial<UseTimeParams>, 'callback' | 'ms'> {
  options?: TimeOptions;
}

export default useTime;
