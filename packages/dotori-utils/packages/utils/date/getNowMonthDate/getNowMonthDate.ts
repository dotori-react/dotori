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
