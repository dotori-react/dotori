import { forwardRef } from 'react';

const Polymorphic: PolymorphicComponent = forwardRef(
  <T extends React.ElementType = 'div'>({ as, ...props }: PolymorphicProps<T>, ref: PolymorphicRef<T>) => {
    const Component = as || 'div';

    return <Component {...props} ref={ref} />;
  },
);

type PolymorphicProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

type PolymorphicComponent = <C extends React.ElementType = 'div'>(
  props: PolymorphicProps<C> & {
    ref?: PolymorphicRef<C>;
  },
) => React.ReactNode;

export default Polymorphic;
