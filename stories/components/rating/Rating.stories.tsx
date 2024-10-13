import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Rating } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Rating',
  component: Rating,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    total: {
      control: 'number',
      description: '*(Required)* Total number of stars (e.g., 5 for a 5-star rating).',
    },
    size: {
      control: 'select',
      description: '*(Optional)* Size of the stars.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      able: {
        defaultValue: {
          detail: 'sm',
        },
      },
    },
    count: {
      control: 'number',
      description: '*(Optional)* The current selected star count (for controlled mode).',
    },
    onChange: {
      action: 'changed',
      description: '*(Optional)* Callback function triggered when a star is clicked.',
    },
  },
  args: {
    total: 5,
    size: 'sm',
    count: 0,
    onChange: fn(),
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [{ count }, updateArgs] = useArgs<{ count: number }>();

    return <Rating {...args} count={count} onChange={newCount => updateArgs({ count: newCount })} />;
  },
};
