export const getTime = (_milliseconds: number) => ({
  hours: Math.floor(_milliseconds / 1000 / 60 / 60) % 60,
  minutes: Math.floor(_milliseconds / 1000 / 60) % 60,
  seconds: Math.floor(_milliseconds / 1000) % 60,
  milliseconds: _milliseconds % 1000,
  raw: _milliseconds,
});

export const getDisplayTime = (_milliseconds: number) => {
  const { hours, minutes, seconds, milliseconds } = getTime(_milliseconds);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};
