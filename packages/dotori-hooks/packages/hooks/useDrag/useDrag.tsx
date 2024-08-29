import { useEffect, useRef, useState } from 'react';

import { range } from 'dotori-utils';

import { useElementRect } from '@dotori-hooks/hooks';

const useDrag = <BoundaryElement extends HTMLElement, DragElement extends HTMLElement>() => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const initialMousePosition = useRef({ x: 0, y: 0 });
  const { ref: boundaryRef, width: boundaryWidth, height: boundaryHeight } = useElementRect<BoundaryElement>();
  const {
    ref: dragRef,
    width: dragWidth,
    height: dragHeight,
    offsetLeft: dragOffsetLeft,
    offsetTop: dragOffsetTop,
  } = useElementRect<DragElement>(isMouseDown);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (!dragRef.current || !dragRef.current.contains(e.target as Node)) return;

      dragRef.current.style.position = 'absolute';
      initialMousePosition.current = { x: e.clientX, y: e.clientY };

      setIsMouseDown(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current || !isMouseDown) return;

      const delta = {
        x: e.clientX - initialMousePosition.current.x,
        y: e.clientY - initialMousePosition.current.y,
      };

      const newPosition = {
        x: range(dragOffsetLeft + delta.x, 0, boundaryWidth - dragWidth),
        y: range(dragOffsetTop + delta.y, 0, boundaryHeight - dragHeight),
      };

      dragRef.current.style.left = `${newPosition.x}px`;
      dragRef.current.style.top = `${newPosition.y}px`;
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [boundaryHeight, boundaryWidth, dragHeight, dragOffsetLeft, dragOffsetTop, dragRef, dragWidth, isMouseDown]);

  return { boundaryRef, dragRef };
};

export default useDrag;
