export const range = (value: number, min: number, max: number) => Math.max(Math.min(value, max), min);

export const validateEven = (num: number) => num % 2 === 0;
