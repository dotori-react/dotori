import { useEffect, useRef, useState } from 'react';

const useElementRect = <T extends HTMLElement>(refresh: boolean = false) => {
  const initialRef = useRef(true);
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    offsetWidth: 0,
    offsetHeight: 0,
    left: 0,
    top: 0,
    offsetLeft: 0,
    offsetTop: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;
      if (!initialRef.current && !refresh) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();

      setSize(prev => ({
        ...prev,
        width: rect.width,
        height: rect.height,
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight,
        left: rect.left,
        top: rect.top + window.scrollY,
        offsetLeft: element.offsetLeft,
        offsetTop: element.offsetTop,
      }));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [refresh]);

  return { ref, ...size };
};

export default useElementRect;
