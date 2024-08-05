import { useEffect } from 'react';

import { useDebounceCallback, useDisClosure } from 'dotori-hooks';

import { ActionIcon } from '@/components';

const ScrollToTop = ({ showedMinHeight = 0 }: ScrollToTopProps) => {
  const { isOpen, open, close } = useDisClosure();
  const debounced = useDebounceCallback({
    callback: () => {
      (showedMinHeight >= window.scrollY ? close : open)();
    },
  });

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', debounced);

    return () => {
      window.removeEventListener('scroll', debounced);
    };
  }, [debounced]);

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
