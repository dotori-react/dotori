import { fn } from '@storybook/test';

import { PinInput } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/PinInput',
  component: PinInput,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    total: {
      control: 'select',
      description: '*(Required)* Specifies the total number of PIN input fields.<br> Must be a number between 1 and 5.',
      options: [1, 2, 3, 4, 5],
    },
    size: {
      control: 'select',
      description: '*(Optional)* Sets the size of the input fields.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    value: {
      control: 'object',
      description:
        '*(Required)* Represents the current value of the PIN input as an array of strings.<br> Each string corresponds to a digit.',
    },
    onChange: {
      actions: 'changed',
      description: '*(Required)* Callback function triggered whenever the value of the PIN input changes.',
    },
  },
  args: {
    total: 1,
    value: [''],
    size: 'md',
    onChange: fn(),
  },
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
