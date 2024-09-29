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
      description: '*(Required)*',
      options: [1, 2, 3, 4, 5],
    },
    size: {
      actions: 'changed',
      description: '*(Optional)*',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    value: {
      control: 'object',
      description: '*(Required)*',
    },
    onChange: {
      actions: 'changed',
      description: '*(Required)*',
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
