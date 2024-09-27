import { useState } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { DatePickerInput } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'dates/DatePickerInput',
  component: DatePickerInput,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    isTodayMark: {
      control: 'boolean',
      description: "*(Optional)* A boolean that determines if today's date should be highlighted in the calendar.",
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    calendarSize: {
      control: 'select',
      description:
        "*(Optional)* Sets the size of the calendar. One of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`. <br> This prop directly maps to the Calendar component's size prop.",
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    onCalendarDateClick: {
      actions: 'clicked',
      description:
        '*(Optional)* A callback function that gets called when a date is clicked. <br/> Receives an object containing `{ year, month, date }` as its argument.',
    },
  },
  args: {
    isTodayMark: false,
    calendarSize: 'sm',
    onCalendarDateClick: fn(),
  },
} satisfies Meta<typeof DatePickerInput>;

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
        <DatePickerInput {...args} onCalendarDateClick={onCalendarDateClick} />
        <p style={{ textAlign: 'center', marginTop: 10 }}>{date === null ? 'no date' : JSON.stringify(date)}</p>
      </div>
    );
  },
};
