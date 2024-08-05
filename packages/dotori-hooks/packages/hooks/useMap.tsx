import { useCallback, useState } from 'react';

const useMap = <K, V>(defaultMap: Map<K, V> = new Map()) => {
  const [map, setMap] = useState(defaultMap);

  const get = useCallback(
    (key: K) => {
      if (!map.has(key)) console.warn('key is not exist in map!');

      return map.get(key);
    },
    [map],
  );

  const add = useCallback((key: K, value: V) => {
    setMap(prevMap => {
      const innerMap = new Map<K, V>(prevMap);

      innerMap.set(key, value);
      return innerMap;
    });
  }, []);

  const adds = useCallback((data: { key: K; value: V }[]) => {
    setMap(prevMap => {
      const innerMap = new Map<K, V>(prevMap);

      data.forEach(({ key, value }) => {
        innerMap.set(key, value);
      });
      return innerMap;
    });
  }, []);

  const update = useCallback((key: K, value: V) => {
    setMap(prevMap => {
      const innerMap = new Map<K, V>(prevMap);

      if (!innerMap.has(key)) {
        console.warn('key is not exist in map!');
        return innerMap;
      }

      innerMap.set(key, value);
      return innerMap;
    });
  }, []);

  const remove = useCallback((key: K) => {
    setMap(prevMap => {
      const innerMap = new Map<K, V>(prevMap);

      innerMap.delete(key);
      return innerMap;
    });
  }, []);

  const clear = useCallback(() => {
    setMap(new Map<K, V>());
  }, []);

  return {
    formattedArray: [...map.values()],
    map,
    get,
    add,
    adds,
    update,
    remove,
    clear,
  };
};

export default useMap;
