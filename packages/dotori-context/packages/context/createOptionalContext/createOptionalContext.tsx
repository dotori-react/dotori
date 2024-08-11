import { createContext, useContext } from 'react';

const createOptionalContext = <ContextValue,>(initialValue: ContextValue | null = null) => {
  const Context = createContext<ContextValue | null>(initialValue);

  const useOptionalContext = () => useContext(Context);

  const OptionalProvider = ({ children, value }: { value: ContextValue; children: React.ReactNode }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [OptionalProvider, useOptionalContext] as const;
};

export default createOptionalContext;
