import { useEffect, useRef, useState } from 'react';

const useMouse = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const refElement = ref.current;

    const handleMousemove = (e: MouseEvent) => {
      setMouse(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    if (refElement) refElement.addEventListener('mousemove', handleMousemove);
    else document.addEventListener('mousemove', handleMousemove);

    return () => {
      if (refElement) refElement.addEventListener('mousemove', handleMousemove);
      else document.addEventListener('mousemove', handleMousemove);
    };
  }, []);

  return { ref, ...mouse };
};

export default useMouse;
