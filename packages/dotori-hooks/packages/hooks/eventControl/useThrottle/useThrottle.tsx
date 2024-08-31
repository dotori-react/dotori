import { useCallback } from 'react';

import { useTimeout } from '@dotori-hooks/hooks';

import type { UseTimeoutParams } from '@dotori-hooks/hooks/time/useTimeout/useTimeout';

const useThrottle = (params: Omit<UseTimeoutParams, 'options'> = {}) => {
  const { timeout, clear } = useTimeout({ ...params, options: { exitOnExist: true, clearOnExist: false } });

  const throttle = useCallback(
    (throttleParams: Omit<UseTimeoutParams, 'options'> = {}) => {
      timeout(throttleParams);
    },
    [timeout],
  );

  return { throttle, clear };
};

export default useThrottle;
