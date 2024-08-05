import { useRef } from 'react';

import { useDisClosure } from './index';

const useFullscreen = <T extends HTMLElement>() => {
  const { isOpen, open, close } = useDisClosure();
  const ref = useRef<T | null>(null);

  const enter = async () => {
    if (!ref.current) return false;

    await ref.current.requestFullscreen();
    open();

    return true;
  };

  const exit = async () => {
    await document.exitFullscreen();
    close();

    return true;
  };

  return { ref, isFullscreen: isOpen, enter, exit };
};

export default useFullscreen;
