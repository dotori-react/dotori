import { useState } from 'react';

import { cn, VariantProps } from 'dotori-utils';

import { ActionIcon } from '@dotori-components/components';
import { DAY_OF_WEEKEND } from '@dotori-components/constants';

import CalendarDates from './CalendarDates';

import type { CalendarDatesProps } from './CalendarDates';

const today = new Date();

const Calendar = ({ selectedCalendarDate, isTodayMark, size, className, calendarDateClick }: CalendarProps) => {
  const [calendarDate, setCalendarDate] = useState(today);

  const handleNextMonth = () => {
    const newCalendarDate = new Date(calendarDate);
    newCalendarDate.setMonth(newCalendarDate.getMonth() + 1);

    setCalendarDate(newCalendarDate);
  };

  const handlePrevMonth = () => {
    const newCalendarDate = new Date(calendarDate);
    newCalendarDate.setMonth(newCalendarDate.getMonth() - 1);

    setCalendarDate(newCalendarDate);
  };

  return (
    <section className={calendarStyle({ size, className })}>
      <h3>
        <div className="m-auto flex items-center justify-between">
          <ActionIcon className="rotate-180" icon="chevronArrowRight" onClick={handlePrevMonth} />
          {calendarDate.getFullYear()}년 {calendarDate.getMonth() + 1}월
          <ActionIcon icon="chevronArrowRight" onClick={handleNextMonth} />
        </div>
      </h3>
      <div className="grid grid-cols-7 grid-rows-7 text-center">
        {Object.values(DAY_OF_WEEKEND)
          .map(({ kr }) => kr.short)
          .map(item => (
            <div key={item} className="py-2">
              {item}
            </div>
          ))}

        <CalendarDates
          calendarDate={calendarDate}
          calendarDateClick={calendarDateClick}
          isTodayMark={isTodayMark}
          selectedCalendarDate={selectedCalendarDate}
          size={size}
          today={today}
        />
      </div>
    </section>
  );
};

export interface CalendarProps extends React.ComponentPropsWithoutRef<'section'>, VariantProps<typeof calendarStyle> {
  calendarDateClick: CalendarDatesProps['calendarDateClick'];
  selectedCalendarDate: CalendarDatesProps['selectedCalendarDate'];
  isTodayMark?: boolean;
}

const calendarStyle = cn('', {
  variants: {
    size: {
      xs: 'w-56 typo-2xs600',
      sm: 'w-64 typo-xs600',
      md: 'w-72 typo-sm600',
      lg: 'w-80 typo-md600',
      xl: 'w-96 typo-xl600',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export default Calendar;
