import { Button, Popover } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Popover',
  component: Popover,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    gap: {
      control: 'number',
      description: '*(Optional)* The space between the target element and the popover.',
      table: {
        defaultValue: { detail: '10' },
      },
    },
    position: {
      control: 'select',
      description: '*(Optional)* The position of the popover relative to the target element.',
      options: ['left', 'right', 'top', 'bottom'],
      able: {
        defaultValue: {
          detail: 'top',
        },
      },
    },
    color: {
      control: 'select',
      description: '*(Optional)* Determines the color scheme of the popover.',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: {
          detail: 'yellow',
        },
      },
    },
    label: {
      control: 'text',
      description: '*(Required)* The content or text to display inside the popover.',
    },
    className: {
      control: 'text',
      description: '*(Optional)* Additional custom classes for the popover container.',
      table: {
        defaultValue: { detail: '' },
      },
    },
    children: {
      control: 'object',
      description: '*(Optional)* The content to trigger popover',
    },
  },
  args: {
    gap: 10,
    position: 'top',
    className: '',
    color: 'yellow',
    label: 'popover',
    children: <Button>button</Button>,
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
