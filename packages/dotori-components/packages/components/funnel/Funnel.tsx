import { useState } from 'react';

import { FunnelProvider } from './Funnel.context';
import Step from './Step';

const Funnel = <T extends string>({ children, names, defaultName }: FunnelProps<T>) => {
  const [currentName, setCurrentName] = useState(defaultName || null);

  const directByName = (_currentName: string) => {
    const name = names.find(_name => _name === _currentName);

    if (name !== undefined) setCurrentName(name);
  };

  return <FunnelProvider value={{ names, currentName, directByName }}>{children}</FunnelProvider>;
};

interface FunnelProps<T> {
  children: React.ReactNode;
  names: T[];
  defaultName?: T;
}

Funnel.Step = Step;

export default Funnel;
