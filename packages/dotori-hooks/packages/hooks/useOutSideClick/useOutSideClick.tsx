import { useEffect, useState, useCallback } from 'react';

const useOutSideClick = <T extends HTMLElement>(callback: () => void) => {
  const [element, setElement] = useState<T | null>(null);

  const ref = useCallback((node: T | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (element === null) return undefined;

    const listener = (e: MouseEvent) => {
      if (element.contains(e.target as HTMLElement)) return;

      callback();
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [callback, element]);

  return ref;
};

export default useOutSideClick;
