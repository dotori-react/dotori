import { useEffect } from 'react';

const useInterval = ({ callback, milliseconds }: UseIntervalParams) => {
  useEffect(() => {
    const timer = setInterval(() => callback(), milliseconds);

    return () => {
      clearInterval(timer);
    };
  }, [callback, milliseconds]);
};

interface UseIntervalParams {
  callback: () => void;
  milliseconds: number;
}

export default useInterval;
