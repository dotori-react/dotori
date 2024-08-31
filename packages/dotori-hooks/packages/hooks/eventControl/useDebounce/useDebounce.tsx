import { useCallback } from 'react';

import { useTimeout } from '@dotori-hooks/hooks';

import type { UseTimeoutParams } from '@dotori-hooks/hooks/time/useTimeout/useTimeout';

const useDebounce = (params: Omit<UseTimeoutParams, 'options'> = {}) => {
  const { timeout, clear } = useTimeout({ ...params, options: { exitOnExist: false, clearOnExist: true } });

  const debounce = useCallback(
    (debounceParams: Omit<UseTimeoutParams, 'options'> = {}) => {
      timeout(debounceParams);
    },
    [timeout],
  );

  return { debounce, clear };
};

export default useDebounce;
