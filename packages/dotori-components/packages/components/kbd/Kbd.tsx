import { cn, VariantProps } from 'dotori-utils';

const Kbd = ({ children, className, ...props }: KdbProps) => (
  <div className="tw-preflight">
    <kbd {...props} className={KbdStyle({ className })}>
      {children}
    </kbd>
  </div>
);

interface KdbProps extends React.ComponentPropsWithoutRef<'kbd'>, VariantProps<typeof KbdStyle> {}

const KbdStyle = cn('inline h-6 rounded border border-b-4 border-gray-300 bg-gray-100 px-2 py-1 font-bold');

export default Kbd;
