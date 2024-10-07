import { Button, Tooltip } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    gap: {
      control: 'number',
      description: '*(Optional)* The space between the target element and the tooltip.',
      table: {
        defaultValue: { detail: '10' },
      },
    },
    position: {
      control: 'select',
      description: '*(Optional)* The position of the tooltip relative to the target element.',
      options: ['left', 'right', 'top', 'bottom'],
      able: {
        defaultValue: {
          detail: 'top',
        },
      },
    },
    color: {
      control: 'select',
      description: '*(Optional)* Determines the color scheme of the tooltip.',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: {
          detail: 'yellow',
        },
      },
    },
    label: {
      control: 'text',
      description: '*(Required)* The content or text to display inside the tooltip.',
    },
    className: {
      control: 'text',
      description: '*(Optional)* Additional custom classes for the tooltip container.',
      table: {
        defaultValue: { detail: '' },
      },
    },
    children: {
      control: 'object',
      description: '*(Optional)* The content to trigger tooltip',
    },
  },
  args: {
    gap: 10,
    position: 'top',
    className: '',
    color: 'yellow',
    label: 'tooltip',
    children: <Button>button</Button>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
