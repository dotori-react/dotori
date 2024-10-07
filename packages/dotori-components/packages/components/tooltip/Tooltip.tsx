import { TinyModal } from '@dotori-components/components';

import type { TinyModalProps } from '@dotori-components/components/modal/TinyModal';

const Tooltip = (props: Omit<TinyModalProps, 'type'>) => <TinyModal {...props} type="tooltip" />;

export default Tooltip;
