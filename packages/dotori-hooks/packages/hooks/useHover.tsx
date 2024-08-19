import { useCallback, useEffect, useState } from 'react';

const useHover = <T extends HTMLElement>() => {
  const [hovered, setHovered] = useState(false);
  const [element, setElement] = useState<T | null>(null);

  const ref = useCallback((node: T | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (element === null) return undefined;

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
  }, [element]);

  return { hovered, ref };
};

export default useHover;
