import { Spinner } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'loading/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      description: '',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      description: '',
      options: ['blue', 'green', 'red', 'yellow', 'gray', 'white', 'black'],
      table: {
        defaultValue: { summary: 'gray' },
      },
    },
    className: {
      control: 'text',
      description: 'spinner className attribute',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    size: 'md',
    color: 'gray',
    className: '',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
