import useTime from '@dotori-hooks/hooks/useTime/useTime';

import type { UseTimeParams } from '@dotori-hooks/hooks/useTime/useTime';

const useInterval = (params: UseIntervalParams = {}) => {
  const { time: interval, clear } = useTime({
    ...params,
    setTimeHandler: setInterval,
    clearTimeHandler: clearInterval,
  });

  return { interval, clear };
};

export interface UseIntervalParams extends Omit<UseTimeParams, 'setTimeHandler' | 'clearTimeHandler'> {}

export default useInterval;
