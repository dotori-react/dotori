export const getTime = (_milliseconds: number) => ({
  hours: Math.floor(_milliseconds / 1000 / 60 / 60) % 60,
  minutes: Math.floor(_milliseconds / 1000 / 60) % 60,
  seconds: Math.floor(_milliseconds / 1000) % 60,
  milliseconds: _milliseconds % 1000,
  raw: _milliseconds,
});
