import { DAY_OF_WEEKEND } from '@dotori-utils/constants';

export const getNowMonthDate = (now: Date = new Date()) => {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay() as keyof typeof DAY_OF_WEEKEND;

  const nowMonthFirstDate = new Date(year, month, 1);
  const firstDate = nowMonthFirstDate.getDate();
  const firstDay = nowMonthFirstDate.getDay() as keyof typeof DAY_OF_WEEKEND;

  const nowMonthLastDate = new Date(year, month + 1, 0);
  const lastDate = nowMonthLastDate.getDate();
  const lastDay = nowMonthLastDate.getDay() as keyof typeof DAY_OF_WEEKEND;

  return {
    year,
    month: month + 1,
    date,
    firstDate,
    lastDate,
    day: { ...DAY_OF_WEEKEND[day], idx: day },
    firstDay: { ...DAY_OF_WEEKEND[firstDay], idx: firstDay },
    lastDay: { ...DAY_OF_WEEKEND[lastDay], idx: lastDay },
  };
};

export const getPrevMonthDate = (now: Date = new Date(), date: number = 1) => {
  const prev = new Date(now.getFullYear(), now.getMonth() - 1, date);

  return getNowMonthDate(prev);
};

export const getNextMonthDate = (now: Date = new Date(), date: number = 1) => {
  const next = new Date(now.getFullYear(), now.getMonth() + 1, date);

  return getNowMonthDate(next);
};

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
