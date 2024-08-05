import { useEffect, useRef, useState } from 'react';

import { cn } from 'dotori-utils';

const OnePage = ({ children, className, ...props }: OnePageProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheelScroll = (e: WheelEvent) => {
      if (ref.current === null) return;
      if (!ref.current.contains(e.target as Node)) return;

      e.preventDefault();

      if (isScrolling) return; // 스크롤이 진행중일 때는 스크롤 이벤트 핸들러가 실행되지 않도록 한다.

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const ort = rect.top !== 0 ? 0 : e.deltaY > 0 ? 1 : -1;
      const targetY = rect.top + window.scrollY + element.offsetHeight * ort;

      const animateScroll = (startY: number, endY: number, duration: number) => {
        const startTime = performance.now();

        const scrollStep = (currentTime: number) => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = easeInOutQuart(progress);

          window.scrollTo(0, startY + (endY - startY) * ease);

          if (timeElapsed < duration) requestAnimationFrame(scrollStep);
          else setIsScrolling(false); // 스크롤이 완료되면 플래그를 해제
        };

        requestAnimationFrame(scrollStep);
      };

      setIsScrolling(true);
      animateScroll(window.scrollY, targetY, 600);
    };

    const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);
    /**
     * 처음에는 천천히 시작합니다.
     * 중간에 빠르게 진행됩니다.
     * 끝부분에서는 다시 천천히 종료됩니다.
     */

    window.addEventListener('wheel', handleWheelScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
    };
  }, [isScrolling]);

  return (
    <div ref={ref} className={onePageStyle({ className })} {...props}>
      {children}
    </div>
  );
};

interface OnePageProps extends React.ComponentPropsWithoutRef<'div'> {}

const onePageStyle = cn('min-h-screen');

export default OnePage;
