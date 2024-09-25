import { useArgs } from '@storybook/preview-api';
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
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    value: {
      control: 'text',
      description: 'Current value of the input (optional, for controlled components).',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    length: {
      control: 'number',
      description: 'Maximum number of dropdown items to display (default is 10).',
      table: {
        defaultValue: { summary: '10' },
      },
    },
    onChange: {
      actions: 'changed',
      description: 'Function to handle input changes (optional).',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
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
    const [{ value }, updateArgs] = useArgs<{ value: string }>();

    return <Autocomplete {...args} value={value} onChange={newValue => updateArgs({ value: newValue })} />;
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
