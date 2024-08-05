import { useEffect, useState } from 'react';

const useDebounceValue = ({ value, ...options }: UseDebounceValueParams) => {
  const { delay } = { ...defaultOptions, ...options };
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

const defaultOptions = {
  delay: 500,
};

interface UseDebounceValueParams extends DebounceOptions {
  value: string;
}

interface DebounceOptions {
  delay?: number;
}

export default useDebounceValue;
