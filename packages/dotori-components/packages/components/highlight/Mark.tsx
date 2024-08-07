import { cn } from 'dotori-utils';

import { Polymorphic } from '@dotori-components/components';

const Mark = ({ className, ...props }: MarkProps) => (
  <Polymorphic as="mark" className={markStyle({ className })} {...props} />
);

interface MarkProps extends React.ComponentPropsWithoutRef<'mark'> {}

const markStyle = cn('bg-yellow-500 text-gray-900');

export default Mark;
