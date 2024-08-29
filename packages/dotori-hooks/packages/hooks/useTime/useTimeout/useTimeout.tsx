import useTime from '@dotori-hooks/hooks/useTime/useTime';

import type { UseTimeParams } from '@dotori-hooks/hooks/useTime/useTime';

const useTimeout = (params: UseTimeoutParams = {}) => {
  const { time: timeout, clear } = useTime({ ...params, setTimeHandler: setTimeout, clearTimeHandler: clearTimeout });

  return { timeout, clear };
};

export interface UseTimeoutParams extends Omit<UseTimeParams, 'setTimeHandler' | 'clearTimeHandler'> {}

export default useTimeout;
