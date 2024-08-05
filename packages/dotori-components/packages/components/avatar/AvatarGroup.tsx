import { cn, VariantProps } from 'dotori-utils';

import { AvatarGroupProvider } from './Avatar.context';

const AvatarGroup = ({ children, direction = 'row' }: AvatarGroupProps) => (
  <AvatarGroupProvider value={{ className: contextStyle({ direction }) }}>
    <div className={directionStyle({ direction })}>{children}</div>
  </AvatarGroupProvider>
);

export interface AvatarGroupProps extends VariantProps<typeof directionStyle> {
  children: React.ReactNode;
  direction?: 'col' | 'row' | 'reverseRow' | 'reverseCol';
}

const contextStyle = cn('', {
  variants: {
    direction: {
      col: '[&:not(:first-child)]:-mt-4',
      row: '[&:not(:first-child)]:-ml-4',
      reverseRow: '[&:not(:first-child)]:-mr-4',
      reverseCol: '[&:not(:first-child)]:-mb-4',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});

const directionStyle = cn('inline-flex', {
  variants: {
    direction: {
      col: 'flex-col',
      row: 'flex-row',
      reverseRow: 'flex-row-reverse',
      reverseCol: 'flex-col-reverse',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});

export default AvatarGroup;
