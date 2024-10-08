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
      description: 'Defines the color theme of the badge.',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'black' },
      },
    },
    variant: {
      control: 'select',
      description: 'Specifies the styling variant of the badge (e.g., filled, outlined, or subtle).',
      options: ['filled', 'outline', 'subtle'],
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: 'select',
      description: 'The size of the badge, adjusting the height and text size.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the badge takes up the full width of its container.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The text content of the badge',
      table: {
        defaultValue: { summary: '' },
      },
    },
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
