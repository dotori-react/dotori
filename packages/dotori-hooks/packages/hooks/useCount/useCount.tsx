import { useCallback, useState } from 'react';

import { range } from 'dotori-utils';

const useCount = ({ initialCount = 0, min = -Infinity, max = Infinity, callback }: UseCountParams) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount(prev => {
      const increasedCount = prev < max ? prev + 1 : prev;

      if (callback) callback(increasedCount);
      return increasedCount;
    });
  }, [callback, max]);

  const decrement = useCallback(() => {
    setCount(prev => {
      const decreasedCount = prev > min ? prev - 1 : prev;

      if (callback) callback(decreasedCount);
      return decreasedCount;
    });
  }, [callback, min]);

  const set = useCallback(
    (_count: number) => {
      const updatedCount = range(_count, min, max);

      if (callback) callback(updatedCount);
      setCount(updatedCount);
    },
    [callback, max, min],
  );

  const reset = useCallback(() => {
    if (callback) callback(initialCount);
    setCount(initialCount);
  }, [callback, initialCount]);

  return {
    count,
    increment,
    decrement,
    set,
    reset,
  };
};

interface UseCountParams {
  initialCount?: number;
  min?: number;
  max?: number;
  callback?: (count: number) => void;
}

export default useCount;
