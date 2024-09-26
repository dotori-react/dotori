import dompurify from 'dompurify';
import { cn } from 'dotori-utils';

import { ENTITY_MAP } from '@dotori-components/constants';

const Entity = ({ symbol, className, ...rest }: EntityProps) => (
  <pre
    className={entityStyle({ className })}
    dangerouslySetInnerHTML={{ __html: dompurify.sanitize(ENTITY_MAP[symbol]) }}
    {...rest}
  />
);

interface EntityProps extends React.ComponentPropsWithoutRef<'pre'> {
  symbol: keyof typeof ENTITY_MAP;
}

const entityStyle = cn('inline p-0 bg-inherit');

export default Entity;
