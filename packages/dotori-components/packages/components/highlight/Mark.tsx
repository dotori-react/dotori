import { cn } from 'dotori-utils';

import { Polymorphic } from '@dotori-components/components';

const Mark = ({ className, ...props }: MarkProps) => (
  <span className="tw-preflight">
    <Polymorphic as="mark" className={markStyle({ className })} {...props} />
  </span>
);

interface MarkProps extends React.ComponentPropsWithoutRef<'mark'> {
  children: string;
}

const markStyle = cn('bg-yellow-500 text-gray-900');

export default Mark;
