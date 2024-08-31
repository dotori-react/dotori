export const sortFromObjectArray = <T extends object>({ array, key, order }: SortFromObjectArrayParams<T>) => {
  const copiedArray = Array.from(array);
  const isASC = order === 'asc';

  return copiedArray.sort((elementA, elementB) => {
    if (key === undefined || key === null || elementA[key] === undefined || elementB[key] === undefined) return 0;

    const [valueA, valueB] = [elementA[key], elementB[key]];

    if (valueA === null) return 1;
    if (valueB === null) return -1;

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return isASC ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return isASC ? valueA - valueB : valueB - valueA;
    }

    return 0;
  });
};

interface SortFromObjectArrayParams<T extends object> {
  array: T[];
  key: keyof T | undefined | null;
  order: 'asc' | 'desc';
}
