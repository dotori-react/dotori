import { Title } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'texts/Title',
  component: Title,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    order: {
      control: 'select',
      description: "*(Required)* The level of the component's heading element.",
      options: [1, 2, 3, 4, 5, 6],
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
      description: '*(Optional)* The content to be displayed inside the heading.',
    },
  },
  args: {
    order: 1,
    className: '',
    children: 'title',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
