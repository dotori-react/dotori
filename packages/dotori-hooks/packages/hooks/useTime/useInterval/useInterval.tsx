import useTime from '@dotori-hooks/hooks/useTime/useTime';

import type { UseTimeParams } from '@dotori-hooks/hooks/useTime/useTime';

const useInterval = (params: Omit<UseTimeParams, 'setTimeHandler' | 'clearTime'> = {}) => {
  const { time: interval, clear } = useTime({ ...params, setTimeHandler: setInterval, clearTime: clearInterval });

  return { interval, clear };
};

export default useInterval;
