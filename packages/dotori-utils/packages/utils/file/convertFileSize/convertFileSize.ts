import { FILE_UNIT_SIZES } from '@dotori-utils/constants';

export const convertFileSize = (size: number, unit: (typeof FILE_UNIT_SIZES)[number]) => {
  const index = FILE_UNIT_SIZES.indexOf(unit);
  const byte = index === 0 ? size : size * 1024 ** index;
  const kilobyte = byte / 1024;
  const megabyte = kilobyte / 1024;
  const gigabyte = megabyte / 1024;
  const terabyte = gigabyte / 1024;

  return {
    byte,
    kilobyte,
    megabyte,
    gigabyte,
    terabyte,
  };
};
