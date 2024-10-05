import { Button, Skeleton } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'loading/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    isSkeletonShow: {
      control: 'boolean',
      description: '*(Required)* ',
    },
    isBorderRound: {
      control: 'boolean',
      description: '*(Optional)* ',
      table: {
        defaultValue: { detail: 'false' },
      },
    },
    className: {
      control: 'text',
      description: '*(Optional)* Additional class names for custom styling.',
      table: {
        defaultValue: { detail: '' },
      },
    },
    children: {
      control: 'object',
      description: '*(Required)* ',
      table: {
        defaultValue: { detail: '' },
      },
    },
  },
  args: {
    isSkeletonShow: true,
    isBorderRound: false,
    children: <Button>test</Button>,
    className: '',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
