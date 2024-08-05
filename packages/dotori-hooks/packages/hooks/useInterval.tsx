import { useEffect } from 'react';

const useInterval = (callback: () => void, milliseconds: number) => {
  useEffect(() => {
    const timer = setInterval(() => callback(), milliseconds);

    return () => {
      clearInterval(timer);
    };
  }, [callback, milliseconds]);
};

export default useInterval;
