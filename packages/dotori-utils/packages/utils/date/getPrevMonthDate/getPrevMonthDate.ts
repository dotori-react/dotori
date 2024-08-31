import { getNowMonthDate } from '@dotori-utils/utils';

export const getPrevMonthDate = (now: Date = new Date(), date: number = 1) => {
  const prev = new Date(now.getFullYear(), now.getMonth() - 1, date);

  return getNowMonthDate(prev);
};
