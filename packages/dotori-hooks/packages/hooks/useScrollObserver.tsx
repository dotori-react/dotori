import { useEffect, useRef } from 'react';

const useScrollObserver = (callback: () => void) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) callback();
        });
      },
      { threshold: 0.7 },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [callback]);

  return observerRef;
};

export default useScrollObserver;
