import { getNowMonthDate } from '@dotori-utils/utils';

export const getNextMonthDate = (now: Date = new Date(), date: number = 1) => {
  const next = new Date(now.getFullYear(), now.getMonth() + 1, date);

  return getNowMonthDate(next);
};
