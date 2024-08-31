import { useEffect } from 'react';

import { useDebounce, useDisClosure } from 'dotori-hooks';

import { ActionIcon } from '@dotori-components/components';

const ScrollToTop = ({ showedMinHeight = 0 }: ScrollToTopProps) => {
  const { isOpen, open, close } = useDisClosure();
  const { debounce } = useDebounce({
    callback: () => {
      (showedMinHeight >= window.scrollY ? close : open)();
    },
  });

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollListener = () => debounce();
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [debounce]);

  return (
    <>
      {isOpen && (
        <ActionIcon
          className="fixed w-10 h-10 p-1 text-gray-600 -rotate-90 border border-gray-200 rounded-full shadow-inner bottom-6 right-6 bg-gray-0 active:bg-gray-300"
          icon="arrowRightAlt"
          onClick={handleScrollToTopClick}
        />
      )}
    </>
  );
};

interface ScrollToTopProps {
  showedMinHeight?: number;
}

export default ScrollToTop;
