import { useState } from '@storybook/preview-api';

import { DarkModeSwitch } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/DarkModeSwitch',
  component: DarkModeSwitch,
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
    on: {
      action: 'changed',
      description: '*(Optional)* Function to be called when the switch changes to the on state.',
    },
    off: {
      action: 'changed',
      description: '*(Optional)* Function to be called when the switch changes to the off state.',
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
    disabled: false,
    className: '',
  },
} satisfies Meta<typeof DarkModeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [isDark, setIsDark] = useState(document.documentElement.className.includes('dark'));

    const toggle = () => {
      const newIsDark = !isDark;

      setIsDark(newIsDark);
      document.documentElement.classList.toggle('light', !newIsDark);
      document.documentElement.classList.toggle('dark', newIsDark);
    };

    return (
      <>
        <DarkModeSwitch {...args} off={toggle} on={toggle} />
        {JSON.stringify(document.documentElement)}
      </>
    );
  },
};
