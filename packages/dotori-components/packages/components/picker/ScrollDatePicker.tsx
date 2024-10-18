import { useEffect, useRef, useState } from 'react';

import { getNowMonthDate } from 'dotori-utils';

import { Button } from '@dotori-components/components';

import { CalendarDatesProps } from '../calendar/CalendarDates';

const ScrollableDate = ({ data: { years, months, dates }, defaultValue, onChange }: ScrollDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue || initialDate);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const handleDragStart = (idx: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!scrollContainerRef.current) return;

    const scrollBox = [...scrollContainerRef.current.children][idx];

    scrollTop.current = scrollBox.scrollTop ?? 0;
    isDragging.current = true;
    startY.current = e.pageY;
  };

  const handleDragStop = (idx: number) => () => {
    if (!scrollContainerRef.current || !isDragging.current) return;

    const findClosestElement = (elements: HTMLDivElement[], targetY: number): HTMLDivElement | null =>
      elements.reduce<{ element: HTMLDivElement | null; distance: number }>(
        (closest, element) => {
          const rect = element.getBoundingClientRect();
          const midY = window.scrollY + rect.y + rect.height / 2;
          const distance = Math.abs(targetY - midY);

          return distance < closest.distance ? { element, distance } : closest;
        },
        { element: null, distance: Infinity },
      ).element;

    const scrollBox = [...scrollContainerRef.current.children][idx];
    const scrollContentElements = [...scrollBox.children] as HTMLDivElement[];

    const scrollBoxRect = scrollBox.getBoundingClientRect();
    const scrollBoxMidY = window.scrollY + scrollBoxRect.y + scrollBoxRect.height / 2;

    const closestElement = findClosestElement(scrollContentElements, scrollBoxMidY);

    if (closestElement) {
      const key = Object.keys(selectedDate)[idx] as keyof typeof selectedDate;
      const newSelectedDate = { ...selectedDate, [key]: Number(closestElement.textContent ?? selectedDate[key]) };

      setSelectedDate(newSelectedDate);
      if (onChange) onChange(newSelectedDate);
    }

    isDragging.current = false;
  };

  const handleDragMove = (idx: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!scrollContainerRef.current || !isDragging.current) return;
    const scrollBox = [...scrollContainerRef.current.children][idx];

    scrollBox.scrollTop = scrollTop.current + startY.current - e.pageY;
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const scrollBoxes = [...scrollContainerRef.current.children];

    if (onChange) onChange(selectedDate);

    scrollBoxes.forEach((element, idx) => {
      const buttonElements = [...element.children];
      const i =
        idx === 0
          ? years.indexOf(selectedDate.year)
          : idx === 1
            ? months.indexOf(selectedDate.month)
            : dates.indexOf(selectedDate.date);

      scrollBoxes[idx].scrollTop = buttonElements[0].clientHeight * i;
    });
  }, [dates, months, onChange, selectedDate, selectedDate.date, selectedDate.month, selectedDate.year, years]);

  return (
    <div className="tw-preflight">
      <section ref={scrollContainerRef} className="flex h-52 w-96 justify-center bg-gray-600">
        {[years, months, dates].map((data, idx) => (
          <div key={idx} className="w-20 cursor-grab overflow-y-scroll py-20">
            {data.map(item => (
              <Button
                key={item}
                className="flex h-10 items-center justify-center px-0"
                fullWidth
                onMouseDown={handleDragStart(idx)}
                onMouseLeave={handleDragStop(idx)}
                onMouseMove={handleDragMove(idx)}
                onMouseUp={handleDragStop(idx)}>
                {item}
              </Button>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

const initialDate = () => {
  const now = getNowMonthDate();

  return { year: now.year, month: now.month, date: now.date };
};

interface ScrollDatePickerProps {
  onChange?: (date: Exclude<CalendarDatesProps['selectedCalendarDate'], null>) => void;
  defaultValue?: Exclude<CalendarDatesProps['selectedCalendarDate'], null>;
  data: { years: number[]; months: number[]; dates: number[] };
}

export default ScrollableDate;
