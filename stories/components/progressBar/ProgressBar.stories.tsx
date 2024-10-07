import { ProgressBar } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    current: {
      control: 'number',
      description: '*(Required)* The current value indicating the progress.',
    },
    total: {
      control: 'number',
      description: '*(Required)* The total value used as the maximum limit for the progress.',
    },
    color: {
      control: 'select',
      description: '*(Optional)* Sets the color of the progress bar.',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: {
          detail: 'gray',
        },
      },
    },
  },
  args: {
    current: 10,
    total: 100,
    color: 'gray',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
