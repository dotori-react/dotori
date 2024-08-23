export const sleep = (timer: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('wake!');
    }, timer);
  });

export const measureTime = async (callback: () => void | Promise<void>) => {
  const startTime = performance.now();

  const result = callback();
  if (result instanceof Promise) await result;

  const endTime = performance.now();

  return endTime - startTime;
};

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
