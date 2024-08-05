import { useState } from 'react';

import { Calendar, Dropdown, Input } from '@/components';

import { DatePickerProvider } from './DatePicker.context';

const DatePickerInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<{
    year: number;
    month: number;
    date: number;
  } | null>(null);

  const calendarDateClick = ({ year, month, date }: { year: number; month: number; date: number }) => {
    setSelectedCalendarDate({ year, month, date });
    setInputValue(`${year}${`${month}`.padStart(2, '0')}${`${date}`.padStart(2, '0')}`);
  };

  return (
    <DatePickerProvider value={{ selectedCalendarDate, calendarDateClick }}>
      <Dropdown contents={<Calendar />}>
        <Input className="cursor-pointer" value={formatDateString(inputValue)} readOnly />
      </Dropdown>
    </DatePickerProvider>
  );
};

const formatDateString = (dateString: string) => {
  const pad = dateString.padEnd(8, '_');
  return pad.replace(/^([\d_]{4})([\d_]{2})([\d_]{2})$/, '$1-$2-$3');
};

export default DatePickerInput;
