import { cn, VariantProps } from 'dotori-utils';

const ProgressBar = ({ current, total, color }: ProgressBarProps) => (
  <div className="tw-preflight">
    <section className="bg-gray-100 h-5 w-full">
      <div className={progressBarStyle({ color })} style={{ width: `${Math.min((current / total) * 100, 100)}%` }} />
    </section>
  </div>
);
interface ProgressBarProps extends VariantProps<typeof progressBarStyle> {
  current: number;
  total: number;
}

const progressBarStyle = cn('h-full', {
  variants: {
    color: {
      black: 'bg-gray-900',
      blue: 'bg-blue-600',
      gray: 'bg-gray-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600',
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

export default ProgressBar;
