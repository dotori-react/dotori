import { forwardRef } from 'react';

import { ScreenReaderOnly } from '@dotori-components/components';

const Image = forwardRef<HTMLImageElement, ImageProps>(({ title, alt, ...rest }, ref) => (
  <>
    <img alt={alt} {...rest} ref={ref} />
    <ScreenReaderOnly>{title}</ScreenReaderOnly>
  </>
));

interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {}

export default Image;
