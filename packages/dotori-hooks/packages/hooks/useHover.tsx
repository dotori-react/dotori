import { useEffect, useRef, useState } from 'react';

const useHover = <T extends HTMLElement>() => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return () => {};

    const element = ref.current;

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.currentTarget && (e.currentTarget as HTMLElement).contains(e.relatedTarget as HTMLElement)) return;

      setHovered(false);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return { hovered, ref };
};

export default useHover;
