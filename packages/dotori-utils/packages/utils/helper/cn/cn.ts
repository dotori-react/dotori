import { cva, cx, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const cn: typeof cva = (base, config) => props => twMerge(cx(cva(base, config)(props)));

export type { VariantProps };
