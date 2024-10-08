import { useCallback, useRef, useState } from 'react';

import { range } from 'dotori-utils';

const useCount = ({
  controlledCount: _controlledCount,
  initialCount,
  min = -Infinity,
  max = Infinity,
}: UseCountParams) => {
  const defaultCount = useRef(initialCount);
  const [count, setCount] = useState(defaultCount.current);

  const controlledCount = _controlledCount === undefined ? count : _controlledCount;

  const increment = useCallback(() => {
    const increasedCount = count < max ? count + 1 : count;

    setCount(increasedCount);

    return increasedCount;
  }, [count, max]);

  const decrement = useCallback(() => {
    const decreasedCount = count > min ? count - 1 : count;

    setCount(decreasedCount);

    return decreasedCount;
  }, [count, min]);

  const set = useCallback(
    (_count: number) => {
      const updatedCount = range(_count, min, max);

      setCount(updatedCount);

      return _count;
    },
    [max, min],
  );

  const reset = useCallback(() => {
    setCount(defaultCount.current);

    return defaultCount.current;
  }, []);

  return {
    count: controlledCount,
    increment,
    decrement,
    set,
    reset,
  };
};

interface UseCountParams {
  controlledCount?: number;
  initialCount: number;
  min?: number;
  max?: number;
}

export default useCount;
