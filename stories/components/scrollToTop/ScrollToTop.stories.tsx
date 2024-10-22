import { ScrollToTop } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/ScrollToTop',
  component: ScrollToTop,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ height: '100vh' }}>
      <Story />
    </div>
  ),
  argTypes: {
    showedMinHeight: {
      control: 'number',
      description: '*(Required)* 	The title text to display in the ScrollToTop.',
    },
  },
  args: {
    showedMinHeight: 0,
  },
} satisfies Meta<typeof ScrollToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
