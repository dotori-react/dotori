import useTime from '@dotori-hooks/hooks/useTime/useTime';

import type { UseTimeParams } from '@dotori-hooks/hooks/useTime/useTime';

const useTimeout = (params: Omit<UseTimeParams, 'setTimeHandler' | 'clearTime'> = {}) => {
  const { time: timeout, clear } = useTime({ ...params, setTimeHandler: setTimeout, clearTime: clearTimeout });

  return { timeout, clear };
};

export default useTimeout;
