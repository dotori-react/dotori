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
