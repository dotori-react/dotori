import { cn, VariantProps } from 'dotori-utils';

const Skeleton = ({ isSkeletonShow, isBorderRound, className, children, ...rest }: SkeletonProps) => (
  <div className={skeletonStyle({ isSkeletonShow, className, isBorderRound })} {...rest}>
    <div className={skeletonInnerStyle({ isInnerShow: !isSkeletonShow })}>{children}</div>
  </div>
);

interface SkeletonProps
  extends React.ComponentPropsWithoutRef<'section'>,
    Omit<VariantProps<typeof skeletonStyle>, 'isSkeletonShow'>,
    Required<Pick<VariantProps<typeof skeletonStyle>, 'isSkeletonShow'>> {
  children: React.ReactNode;
}

const skeletonStyle = cn('h-full w-full bg-gray-200', {
  variants: {
    isBorderRound: {
      true: 'rounded-full',
      false: 'rounded-none',
    },
    isSkeletonShow: {
      true: 'visible animate-pulse',
      false: 'invisible',
    },
  },
  defaultVariants: {
    isBorderRound: false,
  },
});

const skeletonInnerStyle = cn('', {
  variants: {
    isInnerShow: {
      true: 'visible',
      false: 'invisible',
    },
  },
});

export default Skeleton;
