import { ActionIcon } from '@dotori-components/components';

import type { ActionIconProps } from '../actionIcon/ActionIcon';

const CloseButton = (props: CloseButtonProps) => <ActionIcon color="black" icon="close" {...props} />;

interface CloseButtonProps extends Omit<ActionIconProps, 'icon'> {}

export default CloseButton;
