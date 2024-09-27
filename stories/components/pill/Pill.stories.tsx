import { fn } from '@storybook/test';

import { Pill } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'texts/Pill',
  component: Pill,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    size: {
      control: 'select',
      description: '*(Optional)*',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    color: {
      control: 'select',
      description: '*(Optional)*',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'black' },
      },
    },
    withCloseButton: {
      control: 'boolean',
      description: '*(Optional)*',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      actions: 'object',
      description: '*(Optional)*',
    },
    onClose: {
      actions: 'changed',
      description: '*(Optional)*',
    },
  },
  args: {
    size: 'sm',
    color: 'black',
    withCloseButton: true,
    children: 'pill',
    onClose: fn(),
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
