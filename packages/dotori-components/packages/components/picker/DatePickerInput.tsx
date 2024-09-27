import { useState } from 'react';

import { Calendar, Dropdown, Input } from '@dotori-components/components';

import type { CalendarProps } from '../calendar/Calendar';
import type { CalendarDatesProps } from '../calendar/CalendarDates';

const DatePickerInput = ({ isTodayMark, calendarSize, onCalendarDateClick }: DatePickerInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<CalendarDatesProps['selectedCalendarDate']>(null);

  const calendarDateClick = ({ year, month, date }: Exclude<CalendarDatesProps['selectedCalendarDate'], null>) => {
    setSelectedCalendarDate({ year, month, date });
    setInputValue(`${year}${`${month}`.padStart(2, '0')}${`${date}`.padStart(2, '0')}`);
    if (onCalendarDateClick) onCalendarDateClick({ year, month, date });
  };

  return (
    <Dropdown
      contents={
        <Calendar
          calendarDateClick={calendarDateClick}
          isTodayMark={isTodayMark}
          selectedCalendarDate={selectedCalendarDate}
          size={calendarSize}
        />
      }>
      <Input className="cursor-pointer" value={formatDateString(inputValue)} readOnly />
    </Dropdown>
  );
};

interface DatePickerInputProps {
  isTodayMark: CalendarProps['isTodayMark'];
  calendarSize: CalendarProps['size'];
  onCalendarDateClick?: (calendarDate: Exclude<CalendarDatesProps['selectedCalendarDate'], null>) => void;
}

const formatDateString = (dateString: string) => {
  const pad = dateString.padEnd(8, '_');
  return pad.replace(/^([\d_]{4})([\d_]{2})([\d_]{2})$/, '$1-$2-$3');
};

export default DatePickerInput;
