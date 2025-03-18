import { useEffect } from 'react';

import { useDebounce, useDisClosure } from 'dotori-hooks';
import { cn } from 'dotori-utils';

import { ActionIcon } from '@dotori-components/components';

const ScrollToTop = ({ showedMinHeight = 0, className }: ScrollToTopProps) => {
  const { isOpen, open, close } = useDisClosure();
  const { debounce } = useDebounce({
    callback: () => {
      (showedMinHeight >= window.scrollY ? close : open)();
    },
    immediate: true,
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
    <div className="tw-preflight">
      {isOpen && (
        <ActionIcon
          className={scrollToTopStyle({ className })}
          icon="arrowRightAlt"
          size="full"
          onClick={handleScrollToTopClick}
        />
      )}
    </div>
  );
};

interface ScrollToTopProps {
  showedMinHeight?: number;
  className?: string;
}

const scrollToTopStyle = cn(
  'fixed w-10 h-10 p-1 text-gray-600 -rotate-90 border border-gray-200 rounded-full shadow-inner bottom-6 right-6 bg-gray-0 active:bg-gray-300',
);

export default ScrollToTop;
