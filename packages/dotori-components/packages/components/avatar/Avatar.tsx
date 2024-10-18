import { Icon } from 'dotori-icons';
import { cn, VariantProps } from 'dotori-utils';

import { useAvatarGroupContext } from './Avatar.context';
import AvatarGroup from './AvatarGroup';

const Avatar = ({ alt, src, size, name, className }: AvatarProps) => {
  const ctx = useAvatarGroupContext();

  return (
    <div className={avatarGroupStyle({ className: ctx ? ctx.className : '' })}>
      <section className={avatarStyle({ size, className })}>
        {src ? <img alt={alt} src={src} title={alt} /> : name || <Icon icon="profileCircle" />}
      </section>
    </div>
  );
};

interface AvatarProps
  extends Pick<React.ComponentPropsWithoutRef<'div'>, 'className'>,
    VariantProps<typeof avatarStyle> {
  src?: string;
  alt: string;
  name?: string;
}

const avatarGroupStyle = cn('tw-preflight');

const avatarStyle = cn(
  'flex items-center justify-center overflow-hidden text-nowrap rounded-full bg-gray-100 bg-cover',
  {
    variants: {
      size: {
        xs: 'h-5 w-5 text-4xs',
        sm: 'h-7 w-7 text-3xs',
        md: 'h-10 w-10 text-xs',
        lg: 'h-14 w-14 text-sm',
        xl: 'h-20 w-20 text-md',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

Avatar.Group = AvatarGroup;

export default Avatar;
