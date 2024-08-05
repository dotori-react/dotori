import { createSafeContext } from 'dotori-context';

interface FunnelContextValue {
  names: string[];
  currentName: string | null;
  directByName: (currentName: string) => void;
}

export const [FunnelProvider, useFunnelContext] = createSafeContext<FunnelContextValue>(
  'Funnel component was not found in the tree',
);
