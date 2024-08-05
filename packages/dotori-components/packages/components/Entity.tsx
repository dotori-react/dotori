import dompurify from 'dompurify';
import { cn } from 'dotori-utils';

const Entity = ({ symbol, className, ...rest }: EntityProps) => (
  <pre
    className={entityStyle({ className })}
    dangerouslySetInnerHTML={{ __html: dompurify.sanitize(entityMap[symbol]) }}
    {...rest}
  />
);

interface EntityProps extends React.ComponentPropsWithoutRef<'pre'> {
  symbol: keyof typeof entityMap;
}

const entityMap = {
  ' ': '&nbsp;',
  '    ': '&#9;',
  '©': '&copy;',
  '™': '&trade;',
  '®': '&reg;',
  '·': '&middot;',
  ',': '&#44;',
  '‘': '&lsquo;',
  '’': '&rsquo;',
  '"': '&quot;',
  '“': '&ldquo;',
  '”': '&rdquo;',
  '(': '&#40;',
  ')': '&#41;',
  ':': '&#58;',
  '[': '&#91;',
  ']': '&#93;',
  '{': '&#123;',
  '}': '&#125;',
} as const;

const entityStyle = cn('inline-block');

export default Entity;
