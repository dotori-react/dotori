import { cn, VariantProps } from 'dotori-utils';

import { Tooltip } from '@/components';

const MiniSideBarLink = ({ icon: Icon, label, active, className, ...props }: MiniSideBarLinkProps) => (
  <Tooltip color="gray" label={label} position="right">
    <div className={iconStyle({ className, active })} {...props}>
      {Icon}
    </div>
  </Tooltip>
);

interface MiniSideBarLinkProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>,
    VariantProps<typeof iconStyle> {
  icon: React.ReactNode;
  label: string;
}

const iconStyle = cn('cursor-pointer rounded-md p-1 hover:bg-gray-200', {
  variants: {
    active: {
      true: 'bg-blue-100',
      false: '',
    },
  },
});

export default MiniSideBarLink;
