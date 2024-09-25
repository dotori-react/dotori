import { cn, VariantProps } from 'dotori-utils';

const Skeleton = ({ circle, className }: SkeletonProps) => <div className={skeletonStyle({ className, circle })} />;

interface SkeletonProps
  extends React.ComponentPropsWithoutRef<'section'>,
    Omit<VariantProps<typeof skeletonStyle>, 'isShow'>,
    Required<Pick<VariantProps<typeof skeletonStyle>, 'isShow'>> {}

const skeletonStyle = cn('h-full w-full animate-pulse bg-gray-200', {
  variants: {
    circle: {
      true: 'rounded-full',
      false: 'rounded-none',
    },
    isShow: {
      true: 'visible',
      false: 'invisible',
    },
  },
  defaultVariants: {
    circle: false,
  },
});

export default Skeleton;
