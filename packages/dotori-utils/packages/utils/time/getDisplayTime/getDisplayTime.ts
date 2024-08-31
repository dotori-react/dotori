import { getTime } from '@dotori-utils/utils';

export const getDisplayTime = (_milliseconds: number) => {
  const { hours, minutes, seconds, milliseconds } = getTime(_milliseconds);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};
