export const rem = (px: number) => px / 16;

export const convertFileSize = (size: number, unit: (typeof sizeUnits)[number]) => {
  const index = sizeUnits.indexOf(unit);
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

export const convertPercent = (current: number, total: number) => (current / total) * 100;

export const convertPercentage = (current: number, total: number) => `${(current / total) * 100}%`;

const sizeUnits = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'] as const;
