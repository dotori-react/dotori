import { ScreenReaderOnly } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'core/ScreenReaderOnly',
  component: ScreenReaderOnly,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    children: {
      control: 'object',
      description: '*(Required)* The content to be read by screen readers.',
    },
  },
  args: {
    children: 'screen reader',
  },
} satisfies Meta<typeof ScreenReaderOnly>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => (
    <div>
      <h2>screen reader is not display browser</h2>
      <ScreenReaderOnly {...args} />
    </div>
  ),
};
