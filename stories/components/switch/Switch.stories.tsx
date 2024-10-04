import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Switch } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    size: {
      control: 'select',
      description: '*(Optional)* Determines the size of the switch.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { detail: 'sm' },
      },
    },
    checked: {
      control: 'boolean',
      description: '*(Required)* Specifies whether the switch is in the on state (true) or off state (false).',
    },
    on: {
      action: 'changed',
      description: '*(Required)* Function to be called when the switch changes to the on state.',
    },
    off: {
      action: 'changed',
      description: '*(Required)* Function to be called when the switch changes to the off state.',
    },
    disabled: {
      control: 'boolean',
      description: '*(Optional)* Disables the switch, preventing user interactions. Default is false.',
      table: {
        defaultValue: { detail: 'false' },
      },
    },
    className: {
      control: 'text',
      description: '*(Optional)* Additional class names for custom styling.',
      table: {
        defaultValue: { detail: '' },
      },
    },
  },
  args: {
    size: 'sm',
    checked: false,
    on: fn(),
    off: fn(),
    disabled: false,
    className: '',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [{ checked }, updateArgs] = useArgs<{ checked: boolean }>();

    const toggle = () => {
      updateArgs({ checked: !checked });
    };

    return <Switch {...args} checked={checked} off={toggle} on={toggle} />;
  },
};
