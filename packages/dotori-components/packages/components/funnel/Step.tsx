import { useFunnelContext } from './Funnel.context';

const Step = ({ children, name }: StepProps) => {
  const ctx = useFunnelContext();

  return ctx.currentName === name && children;
};

export interface StepProps {
  children: React.ReactNode;
  name: string;
}

export default Step;
