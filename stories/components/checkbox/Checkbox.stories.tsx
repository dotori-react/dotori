import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Checkbox } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    label: {
      control: 'text',
      description: 'The text label to be displayed next to the checkbox. Optional.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'If `true`, the checkbox will be displayed in an indeterminate state. Default is `false`.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: 'boolean',
      description:
        'Controls the checked state of the checkbox. Can be either `true`, `false`, or `undefined` for an uncontrolled component.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      description: "Defines the size of the checkbox. One of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`. Default is `'sm'`.",
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    onChange: {
      actions: 'changed',
      description: 'Callback function triggered when the checkbox state changes.',
    },
    className: {
      control: 'text',
      description: "Additional class names can be passed to further customize the checkbox's styling.",
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    label: 'checkbox label',
    indeterminate: false,
    checked: false,
    size: 'sm',
    onChange: fn(),
    className: '',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [{ checked }, updateArgs] = useArgs<{ checked: boolean }>();
    return <Checkbox {...args} checked={checked} onChange={e => updateArgs({ checked: e.target.checked })} />;
  },
};
