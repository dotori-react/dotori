import { useEffect } from 'react';

const useTimeout = ({ callback, milliseconds }: UseTimeoutParams) => {
  useEffect(() => {
    const timer = setTimeout(callback, milliseconds);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, milliseconds]);
};

interface UseTimeoutParams {
  callback: () => void;
  milliseconds: number;
}

export default useTimeout;
