import { useEffect, useRef } from 'react';

const useScrollObserver = <T extends HTMLElement>({ callback, options }: UseScrollObserverParams) => {
  const observerRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) callback();
        });
      },
      { ...defaultOptions, ...options },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return observerRef;
};

interface UseScrollObserverParams {
  callback: () => void;
  options?: IntersectionObserverInit;
}

const defaultOptions = { threshold: 0.7 };

export default useScrollObserver;
