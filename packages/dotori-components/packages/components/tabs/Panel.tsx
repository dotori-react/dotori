import { useTabsContext } from './Tabs.context';

const Panel = ({ children, value }: PanelProps) => {
  const ctx = useTabsContext();

  return <div>{ctx.defaultValue === value && children}</div>;
};

export interface PanelProps {
  children: React.ReactNode;
  value: string;
}

export default Panel;
