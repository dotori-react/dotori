export const rem = (px: number) => px / 16;

export const convertPercent = (current: number, total: number) => (current / total) * 100;

export const convertPercentage = (current: number, total: number) => `${(current / total) * 100}%`;
