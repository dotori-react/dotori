import { cn, getCalendarDate, getNowMonthDate, VariantProps } from 'dotori-utils';

import { Button } from '@dotori-components/components';

const CalendarDates = ({
  selectedCalendarDate,
  calendarDate,
  isTodayMark,
  size,
  today,
  calendarDateClick,
}: CalendarDatesProps) => {
  const todayDate = getNowMonthDate(today);
  const { saturdays, sundays, datesOfPrevMonth, datesOfNowMonth, datesOfNextMonth } = getCalendarDate(calendarDate);

  const handleCalendarDateClick = (newSelectedCalendarDate: { year: number; month: number; date: number }) => () => {
    calendarDateClick(newSelectedCalendarDate);
  };

  return (
    <>
      {[datesOfPrevMonth, datesOfNowMonth, datesOfNextMonth].map(datesOfMonth =>
        datesOfMonth.map(({ year, month, date }) => (
          <Button
            key={date}
            variant="subtle"
            className={dateOfMonthStyle({
              size,
              isSaturday: saturdays.some(
                saturday => saturday.year === year && saturday.month === month && saturday.date === date,
              ),
              isSunday: sundays.some(
                saturday => saturday.year === year && saturday.month === month && saturday.date === date,
              ),
              isNowDate: datesOfNowMonth.some(
                dateOfNowMonth =>
                  dateOfNowMonth.year === year && dateOfNowMonth.month === month && dateOfNowMonth.date === date,
              ),
              isTodayMark:
                isTodayMark && todayDate.year === year && todayDate.month === month && todayDate.date === date,
              isSelected:
                selectedCalendarDate?.year === year &&
                selectedCalendarDate?.month === month &&
                selectedCalendarDate?.date === date,
            })}
            onClick={handleCalendarDateClick({ year, month, date })}>
            {date}일
          </Button>
        )),
      )}
    </>
  );
};

interface CalendarDate {
  year: number;
  month: number;
  date: number;
}

export interface CalendarDatesProps extends VariantProps<typeof dateOfMonthStyle> {
  today: Date;
  calendarDate: Date;
  selectedCalendarDate: CalendarDate | null;
  calendarDateClick: ({ year, month, date }: CalendarDate) => void;
}

const dateOfMonthStyle = cn('cursor-pointer place-content-center p-0 text-gray-900', {
  variants: {
    isNowDate: {
      true: '',
      false: 'text-opacity-30',
    },
    isSaturday: {
      true: 'text-blue-500',
      false: '',
    },
    isSunday: {
      true: 'text-red-500',
      false: '',
    },
    isTodayMark: {
      true: 'rounded-full bg-green-500 text-gray-100 hover:bg-green-600 hover:bg-opacity-100',
      false: '',
    },
    isSelected: {
      true: 'bg-blue-500 text-white text-opacity-100 hover:bg-blue-600 hover:bg-opacity-100',
      false: '',
    },
    size: {
      xs: 'typo-2xs600',
      sm: 'typo-xs600',
      md: 'typo-sm600',
      lg: 'typo-md600',
      xl: 'typo-xl600',
    },
  },

  defaultVariants: {
    isSaturday: false,
    isSunday: false,
    isNowDate: false,
    isTodayMark: false,
    size: 'sm',
  },
});

export default CalendarDates;
