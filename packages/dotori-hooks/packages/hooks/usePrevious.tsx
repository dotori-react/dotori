import { useEffect, useRef } from 'react';

const usePrevious = <T,>(value: T) => {
  const previous = useRef<null | T>(value);

  useEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
};

export default usePrevious;
