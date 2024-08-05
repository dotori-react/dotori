import { createOptionalContext } from 'dotori-context';

interface AvatarGroupContextValue extends Pick<React.ComponentPropsWithoutRef<'div'>, 'className'> {}

export const [AvatarGroupProvider, useAvatarGroupContext] = createOptionalContext<AvatarGroupContextValue>();
