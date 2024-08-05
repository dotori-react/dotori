import { useEffect } from 'react';

const useTimeout = (callback: () => void, milliseconds: number) => {
  useEffect(() => {
    const timer = setTimeout(() => callback(), milliseconds);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, milliseconds]);
};

export default useTimeout;
