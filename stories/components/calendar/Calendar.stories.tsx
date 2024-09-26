import { fn } from '@storybook/test';

import { Calendar } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'dates/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    selectedCalendarDate: {
      control: 'object',
      description: '',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    isTodayMark: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      description: '',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    className: {
      control: 'text',
      description: '',
      table: {
        defaultValue: { summary: '' },
      },
    },
    calendarDateClick: {
      actions: 'clicked',
      description: '',
    },
  },
  args: {
    selectedCalendarDate: { year: 2025, month: 1, date: 1 },
    isTodayMark: false,
    size: 'sm',
    className: '',
    calendarDateClick: fn(),
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
