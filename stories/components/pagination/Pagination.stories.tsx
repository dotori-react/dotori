import { fn } from '@storybook/test';

import { Pagination } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    pageTotal: {
      control: 'number',
      description: '*(Required)* Total number of pages available for navigation.',
    },
    page: {
      control: 'number',
      description: '*(Required)* The current page number.',
    },
    onChange: {
      actions: 'changed',
      description:
        '*(Optional)* A callback function that gets called with the new page number whenever a page is changed.',
    },
  },
  args: {
    pageTotal: 10,
    page: 1,
    onChange: fn(),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
