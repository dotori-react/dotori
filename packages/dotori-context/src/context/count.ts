import { createSafeContext } from '@/context';

interface CountContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const [CountProvider, useCountContext] =
  createSafeContext<CountContext>('Provider가 누락되었습니다 추가해주세요');
