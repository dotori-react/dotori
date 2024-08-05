import { cn, VariantProps } from 'dotori-utils';

import { useAvatarGroupContext } from './Avatar.context';
import AvatarGroup from './AvatarGroup';

const Avatar = ({ alt, src, size, className }: AvatarProps) => {
  const ctx = useAvatarGroupContext();

  return (
    <section className={avatarStyle({ size, className: ctx ? `${ctx.className} ${className}` : className })}>
      {src ? <img alt={alt} src={src} /> : alt}
    </section>
  );
};

interface AvatarProps
  extends Pick<React.ComponentPropsWithoutRef<'div'>, 'className'>,
    VariantProps<typeof avatarStyle> {
  src?: string;
  alt: string;
}

const avatarStyle = cn(
  'flex items-center justify-center overflow-hidden text-nowrap rounded-full border-2 border-gray-700 bg-gray-100 bg-cover',
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
