import { useEffect, useRef } from 'react';

const useScrollbarWidth = () => {
  const scrollbarWidth = useRef(0);

  useEffect(() => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const width = outer.offsetWidth - inner.offsetWidth;
    outer.remove();

    scrollbarWidth.current = width;
  }, []);

  return scrollbarWidth.current;
};

export default useScrollbarWidth;
