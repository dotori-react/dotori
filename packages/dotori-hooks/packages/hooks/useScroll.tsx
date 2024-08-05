import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState(defaultScroll);
  const currentScrollY = useRef(0);

  useEffect(() => {
    const handleWheelScroll = (e: WheelEvent) => {
      const { deltaY } = e;

      setScroll(prev => ({
        ...prev,
        isScrollUp: deltaY < 0,
        isScrollDown: deltaY > 0,
      }));
    };

    const handleScroll = () => {
      if (scroll.isScrollStop) currentScrollY.current = window.scrollY;

      setScroll(prev => ({
        ...prev,
        isScrollStop: false,
        movedScrollY: window.scrollY - currentScrollY.current,
      }));
    };

    const handleScrollEnd = () => {
      const { movedScrollY, ...exceptionDefaultScroll } = defaultScroll;

      setScroll(prev => ({
        ...prev,
        ...exceptionDefaultScroll,
        movedScrollY: window.scrollY - currentScrollY.current,
      }));
    };

    window.addEventListener('wheel', handleWheelScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleScrollEnd);

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
    };
  }, [scroll.isScrollStop]);

  return scroll;
};

const defaultScroll = {
  isScrollUp: false,
  isScrollDown: false,
  isScrollStop: true,
  movedScrollY: 0,
};

export default useScroll;
