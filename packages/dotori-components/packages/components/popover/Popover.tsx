import { TinyModal } from '@dotori-components/components';

import type { TinyModalProps } from '@dotori-components/components/modal/TinyModal';

const Popover = (props: Omit<TinyModalProps, 'type'>) => <TinyModal {...props} type="popover" />;

export default Popover;
