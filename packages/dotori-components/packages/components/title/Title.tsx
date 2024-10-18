import { cn } from 'dotori-utils';

const Title = ({ order, className, children, ...rest }: TitleProps) => {
  const Tag: keyof JSX.IntrinsicElements = `h${order}`;

  return (
    <div className="tw-preflight">
      <Tag className={titleStyle({ order, className })} {...rest}>
        {children}
      </Tag>
    </div>
  );
};

interface TitleProps extends React.ComponentPropsWithoutRef<'head'> {
  order: 1 | 2 | 3 | 4 | 5 | 6;
}

const titleStyle = cn('', {
  variants: {
    order: {
      1: 'typo-3xl700',
      2: 'typo-xl700',
      3: 'typo-lg700',
      4: 'typo-md700',
      5: 'typo-sm700',
      6: 'typo-xs700',
    },
  },
});

export default Title;
