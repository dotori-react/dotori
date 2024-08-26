import { useCallback, useState } from 'react';

const useQueue = <T,>(initialValue: T[] = []) => {
  const [queue, setQueue] = useState<T[]>(initialValue);

  const first = queue[0];
  const last = queue[queue.length - 1];
  const size = queue.length;

  const add = useCallback((value: T) => {
    setQueue(q => [...q, value]);
    return value;
  }, []);

  const remove = useCallback(() => {
    let removed = null;
    setQueue(([_removed, ...q]) => {
      removed = _removed;
      return q;
    });
    return removed;
  }, []);

  const clear = useCallback(() => {
    setQueue([]);
    return [];
  }, []);

  return {
    queue,
    first,
    last,
    size,
    add,
    remove,
    clear,
  };
};

export default useQueue;
