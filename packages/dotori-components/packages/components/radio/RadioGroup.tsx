import { useState } from 'react';

import { RadioGroupProvider } from './RadioGroup.context';

const RadioGroup = ({ name, children }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return <RadioGroupProvider value={{ name, selectedValue, onChange }}>{children}</RadioGroupProvider>;
};

export interface RadioGroupProps {
  name: string;
  children: React.ReactNode;
}

export default RadioGroup;
