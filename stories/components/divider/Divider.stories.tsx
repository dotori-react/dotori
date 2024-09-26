import { Divider } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: 'select',
      description:
        'The divider supports different heights (`xs`, `sm`, `md`, `lg`, `xl`), allowing for various thicknesses.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'xs' },
      },
    },
    className: {
      control: 'text',
      description: "You can pass custom class names to further modify the divider's styling.",
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    height: 'xs',
    className: '',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
