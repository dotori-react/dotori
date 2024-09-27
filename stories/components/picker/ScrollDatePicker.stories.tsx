import { useState } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { ScrollDatePicker } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'dates/ScrollDatePicker',
  component: ScrollDatePicker,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    data: {
      control: 'object',
      description: '*(Required)* An object containing the arrays of years, months, and dates to display.',
    },
    defaultValue: {
      control: 'object',
      description:
        '*(Optional)* An optional object specifying the default date to be selected.<br> Should contain `{ year, month, date }`.',
      table: {
        defaultValue: {
          summary: `today date: (${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()})`,
        },
      },
    },
    onChange: {
      actions: 'changed',
      description:
        '*(Optional)*  A callback function that is called with the selected date whenever the user makes a change.<br> Receives an object in the format { year, month, date }.',
    },
  },
  args: {
    data: {
      years: Array.from({ length: 5 }, (_, i) => 2020 + i),
      months: Array.from({ length: 12 }, (_, i) => i + 1),
      dates: Array.from({ length: 32 }, (_, i) => i + 1),
    },
    defaultValue: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
    onChange: fn(),
  },
} satisfies Meta<typeof ScrollDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [date, setDate] = useState<{ year: number; month: number; date: number } | null>(null);

    const onCalendarDateClick = (clickedDate: { year: number; month: number; date: number }) => {
      setDate(clickedDate);
    };

    return (
      <div>
        <ScrollDatePicker {...args} onChange={onCalendarDateClick} />
        <p style={{ textAlign: 'center', marginTop: 10 }}>{date === null ? 'no date' : JSON.stringify(date)}</p>
      </div>
    );
  },
};
