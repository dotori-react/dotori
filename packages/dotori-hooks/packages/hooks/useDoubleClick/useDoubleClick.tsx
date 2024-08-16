import { useEffect, useRef } from 'react';

const useDoubleClick = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;

    const handleClick = callback;

    if (element) element.addEventListener('dblclick', handleClick);

    return () => {
      if (element) element.removeEventListener('dblclick', handleClick);
    };
  }, [callback]);

  return { ref };
};

export default useDoubleClick;
