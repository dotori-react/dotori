import { useState } from 'react';

import { Calendar } from '@dotori-components/components';

import type { CalendarProps } from '../calendar/Calendar';
import type { CalendarDatesProps } from '../calendar/CalendarDates';

const DatePicker = ({ isTodayMark, calendarSize, onCalendarDateClick }: DatePickerProps) => {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<{
    year: number;
    month: number;
    date: number;
  } | null>(null);

  const calendarDateClick = ({ year, month, date }: { year: number; month: number; date: number }) => {
    setSelectedCalendarDate({ year, month, date });
    if (onCalendarDateClick) onCalendarDateClick({ year, month, date });
  };

  return (
    <Calendar
      calendarDateClick={calendarDateClick}
      isTodayMark={isTodayMark}
      selectedCalendarDate={selectedCalendarDate}
      size={calendarSize}
    />
  );
};

interface DatePickerProps {
  isTodayMark: CalendarProps['isTodayMark'];
  calendarSize: CalendarProps['size'];
  onCalendarDateClick?: (calendarDate: Exclude<CalendarDatesProps['selectedCalendarDate'], null>) => void;
}

export default DatePicker;
