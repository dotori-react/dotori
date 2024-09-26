import { useState } from 'react';

import { Calendar } from '@dotori-components/components';

const DatePicker = () => {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<{
    year: number;
    month: number;
    date: number;
  } | null>(null);

  const calendarDateClick = ({ year, month, date }: { year: number; month: number; date: number }) => {
    setSelectedCalendarDate({ year, month, date });
  };

  return <Calendar calendarDateClick={calendarDateClick} selectedCalendarDate={selectedCalendarDate} />;
};

export default DatePicker;
