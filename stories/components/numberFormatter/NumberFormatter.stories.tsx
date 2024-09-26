import { NumberFormatter } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'texts/NumberFormatter',
  component: NumberFormatter,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    prefix: {
      control: 'text',
      description: '*(Optional)* A string to be displayed before the formatted number.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    suffix: {
      control: 'text',
      description: '*(Optional)* A string to be displayed after the formatted number.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    value: {
      control: 'number',
      description: '*(Required)* The numerical value to be formatted.',
    },
    thousandSeparator: {
      control: 'boolean',
      description:
        '*(Optional)* A boolean or string indicating if a thousand separator should be applied. <br/>If `true`, a comma (`,`) is used by default. You can provide a custom string separator like a dot (`.`) or space (` `).',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    scale: {
      control: { type: 'object' }, // `scale` 전체를 객체 형태로 제어
      description:
        "*(Optional)* An object specifying the scaling type and position <br/>**type**: One of `'ceil' | 'floor' | 'round'`. This defines how to scale the number. <br/>**position**: A number indicating the decimal place to round, floor, or ceil to.",
      table: {
        defaultValue: { summary: '{}' },
      },
    },
  },
  args: {
    prefix: '',
    suffix: '$',
    value: 2850,
    thousandSeparator: '',
    scale: { type: 'ceil', position: -2 },
  },
} satisfies Meta<typeof NumberFormatter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
