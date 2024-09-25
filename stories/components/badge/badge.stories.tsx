import { Badge } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'alerts/Badge',
  component: Badge,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    color: {
      control: 'select',
      description: '',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'black' },
      },
    },
    variant: {
      control: 'select',
      description: '',
      options: ['filled', 'outline', 'subtle'],
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: 'select',
      description: '',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: { control: 'text', description: 'Additional class names to be applied.' },
  },
  args: {
    color: 'black',
    variant: 'filled',
    size: 'md',
    fullWidth: false,
    children: 'badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
