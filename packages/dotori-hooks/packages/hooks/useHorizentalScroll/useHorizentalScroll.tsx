'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const useHorizontalScroll = <RefElement extends HTMLElement>() => {
  const containerRef = useRef<RefElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [totalX, setTotalX] = useState(0);

  const preventSideEffect = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart: React.MouseEventHandler<RefElement> = useCallback(
    e => {
      preventSideEffect(e.nativeEvent);

      setIsDragging(true);
      setIsMouseDown(true);
      const x = e.clientX;
      setStartX(x);
      if (containerRef.current && 'scrollLeft' in containerRef.current) setTotalX(x + containerRef.current.scrollLeft);
    },
    [preventSideEffect],
  );

  const onDragMove: React.MouseEventHandler<RefElement> = useCallback(
    e => {
      preventSideEffect(e.nativeEvent);
      setIsMouseDown(false);

      if (!isDragging) return;

      const scrollLeft = totalX - e.clientX;

      if (containerRef.current && 'scrollLeft' in containerRef.current) containerRef.current.scrollLeft = scrollLeft;
    },
    [isDragging, preventSideEffect, totalX],
  );

  const onDragEnd: React.MouseEventHandler<RefElement> = useCallback(
    e => {
      if (!isDragging) return;
      if (!containerRef.current) return;

      const endX = e.clientX;
      const dragDiff = Math.abs(startX - endX);

      if (dragDiff > 10) preventSideEffect(e.nativeEvent);

      setIsDragging(false);
      setIsMouseDown(false);
    },
    [isDragging, preventSideEffect, startX],
  );

  useEffect(() => {
    if (isMouseDown) document.body.style.cursor = 'grab';
    else if (isDragging) document.body.style.cursor = 'grabbing';
    else document.body.style.cursor = 'default';
  }, [isDragging, isMouseDown]);

  return {
    containerRef,
    onDragStart,
    onDragMove,
    onDragEnd,
  };
};

export default useHorizontalScroll;
