import { useState } from 'react';

import { Calendar } from '@dotori-components/components';

import { DatePickerProvider } from './DatePicker.context';

const DatePicker = () => {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<{
    year: number;
    month: number;
    date: number;
  } | null>(null);

  const calendarDateClick = ({ year, month, date }: { year: number; month: number; date: number }) => {
    setSelectedCalendarDate({ year, month, date });
  };

  return (
    <DatePickerProvider value={{ selectedCalendarDate, calendarDateClick }}>
      <Calendar />
    </DatePickerProvider>
  );
};

export default DatePicker;
