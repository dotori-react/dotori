import { useCallback, useRef } from 'react';

import { useDisClosure } from '@dotori-hooks/hooks';

const useFullscreen = <T extends HTMLElement>() => {
  const { isOpen: isFullScreen, open, close } = useDisClosure();
  const ref = useRef<T | null>(null);

  const enter = useCallback(async () => {
    if (!ref.current) return false;

    await ref.current.requestFullscreen();
    open();

    return true;
  }, [open]);

  const exit = useCallback(async () => {
    await document.exitFullscreen();
    close();

    return true;
  }, [close]);

  return { ref, isFullScreen, enter, exit };
};

export default useFullscreen;
