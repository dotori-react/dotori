import { useEffect, useRef, useState } from 'react';

import { range } from 'dotori-utils';

import { useElementRect } from '@dotori-hooks/hooks';

const useResize = <BoundaryElement extends HTMLElement, ResizeElement extends HTMLElement>(
  options?: UseResizeOptions,
) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const initialMousePosition = useRef({ x: 0, y: 0 });
  const { ref: boundaryRef, width: boundaryWidth, height: boundaryHeight } = useElementRect<BoundaryElement>();
  const { ref: resizeRef, width: resizeWidth, height: resizeHeight } = useElementRect<ResizeElement>(isMouseDown);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (!resizeRef.current?.contains(e.target as Node)) return;

      initialMousePosition.current = { x: e.clientX, y: e.clientY };
      setIsMouseDown(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown || !resizeRef.current) return;

      const resizeOptions = {
        minWidth: options?.minWidth ?? 0,
        minHeight: options?.minHeight ?? 0,
        maxWidth: options?.maxWidth ?? boundaryWidth,
        maxHeight: options?.maxHeight ?? boundaryHeight,
      };

      const delta = {
        x: e.clientX - initialMousePosition.current.x,
        y: e.clientY - initialMousePosition.current.y,
      };

      const newResize = {
        width: range(resizeWidth + delta.x, resizeOptions.minWidth, resizeOptions.maxWidth),
        height: range(resizeHeight + delta.y, resizeOptions.minHeight, resizeOptions.maxHeight),
      };

      resizeRef.current.style.width = `${newResize.width}px`;
      resizeRef.current.style.height = `${newResize.height}px`;
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [
    boundaryHeight,
    boundaryWidth,
    isMouseDown,
    options?.maxHeight,
    options?.maxWidth,
    options?.minHeight,
    options?.minWidth,
    resizeHeight,
    resizeRef,
    resizeWidth,
  ]);

  return { boundaryRef, resizeRef };
};

interface UseResizeOptions {
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export default useResize;
