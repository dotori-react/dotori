import { Avatar, Indicator } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'alerts/Indicator',
  component: Indicator,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    children: {
      control: 'object',
      description: 'The content to be wrapped by the indicator (e.g., an icon or a button).',
    },
    color: {
      control: 'select',
      description: 'The background color of the indicator.',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'green' },
      },
    },
    size: {
      control: 'number',
      description: 'A number that sets both the width and height of the indicator.',
    },
    radius: {
      control: 'select',
      description: 'The border radius of the indicator.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'xl' },
      },
    },
    position: {
      control: 'select',
      description: 'The position of the indicator relative to the child element.',
      options: ['rightTop', 'rightBottom', 'leftTop', 'leftBottom', 'top', 'bottom', 'left', 'right'],
      table: {
        defaultValue: { summary: 'rightTop' },
      },
    },
    animation: {
      control: 'select',
      description: "An optional animation for the indicator. Can be `'pulse'` or `'none'`.",
      options: ['none', 'pulse'],
      table: {
        defaultValue: { summary: 'none' },
      },
    },
  },
  args: {
    children: <Avatar alt="profile" />,
    size: 8,
    radius: 'xl',
    position: 'rightTop',
    animation: 'pulse',
    color: 'green',
  },
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
