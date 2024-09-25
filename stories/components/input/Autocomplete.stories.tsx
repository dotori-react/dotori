import { useEffect, useState } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Autocomplete } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of objects to display in the dropdown. Each object must include a label and a value.',
    },
    placeholder: { control: 'text', description: 'Placeholder text for the input.' },
    value: { control: 'text', description: 'Current value of the input (optional, for controlled components).' },
    length: { control: 'number', description: 'Maximum number of dropdown items to display (default is 10).' },
    onChange: { actions: 'changed', description: 'Function to handle input changes (optional).' },
  },
  args: {
    data: [
      { value: 'react', label: 'react' },
      { value: 'vue', label: 'vue' },
      { value: 'angular', label: 'angular' },
    ],
    placeholder: 'framework',
    value: '',
    length: 10,
    onChange: fn(),
  },
  render: args => {
    const [value, setValue] = useState(args.value);

    useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return <Autocomplete {...args} value={value} onChange={setValue} />;
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
