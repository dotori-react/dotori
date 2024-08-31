import { getNextMonthDate, getNowMonthDate, getPrevMonthDate } from '@dotori-utils/utils';

export const getCalendarDate = (now: Date = new Date()) => {
  const nowMonthDate = getNowMonthDate(now);
  const prevMonthDate = getPrevMonthDate(now);
  const nextMonthDate = getNextMonthDate(now);

  const calendarSaturdays = [prevMonthDate, nowMonthDate, nextMonthDate].reduce(
    (saturdays, monthDate) => [
      ...saturdays,
      ...getDaysOfWeek(monthDate.firstDay.idx, monthDate.lastDate, 'sat').map(date => ({
        year: monthDate.year,
        month: monthDate.month,
        date,
      })),
    ],
    [] as { year: number; month: number; date: number }[],
  );

  const calendarSundays = [prevMonthDate, nowMonthDate, nextMonthDate].reduce(
    (sundays, monthDate) => [
      ...sundays,
      ...getDaysOfWeek(monthDate.firstDay.idx, monthDate.lastDate, 'sun').map(date => ({
        year: monthDate.year,
        month: monthDate.month,
        date,
      })),
    ],
    [] as { year: number; month: number; date: number }[],
  );

  return {
    prev: prevMonthDate,
    now: nowMonthDate,
    next: nextMonthDate,
    saturdays: calendarSaturdays,
    sundays: calendarSundays,
    datesOfPrevMonth: Array.from({ length: nowMonthDate.firstDay.idx }, (_, i) => ({
      year: prevMonthDate.year,
      month: prevMonthDate.month,
      date: prevMonthDate.lastDate - i,
    })).reverse(),
    datesOfNowMonth: Array.from({ length: nowMonthDate.lastDate }, (_, i) => ({
      year: nowMonthDate.year,
      month: nowMonthDate.month,
      date: i + 1,
    })),
    datesOfNextMonth: Array.from({ length: 7 * 6 - nowMonthDate.firstDay.idx - nowMonthDate.lastDate }, (_, i) => ({
      year: nextMonthDate.year,
      month: nextMonthDate.month,
      date: i + 1,
    })),
  };
};

const getDaysOfWeek = (_firstDayIdx: number, _lastDate: number, type: 'sat' | 'sun') => {
  const days: number[] = [];
  let date = type === 'sat' ? 7 - _firstDayIdx : (8 - _firstDayIdx) % 7;

  do {
    if (date !== 0) days.push(date);

    date += 7;
  } while (date <= _lastDate);

  return days;
};
