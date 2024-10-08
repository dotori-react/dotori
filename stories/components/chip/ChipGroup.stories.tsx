import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Chip } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/ChipGroup',
  component: Chip.Group,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description:
        'Whether multiple Chip components received as children can be checked.; If multiple is true, then value must be an array of strings.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: 'object',
      description:
        'The default checked state is set when the value passed to the Chip component received as children matches.; If multiple is true, then value must be an array of strings.',
      table: {
        defaultValue: { summary: '[] or ""' },
      },
    },
    children: {
      control: 'object',
      description: 'It receives the Chip component as children.',
    },
    onChange: {
      action: 'changed',
      description: 'An event function that triggers when the checked Chip component changes.',
    },
  },
  args: {
    multiple: false,
    onChange: fn(),
    children: (
      <>
        <Chip name="framework" value="react" variant="filled">
          react
        </Chip>
        <Chip name="framework" value="vue" variant="filled">
          vue
        </Chip>
        <Chip name="framework" value="angular" variant="filled">
          angular
        </Chip>
      </>
    ),
  },
} satisfies Meta<typeof Chip.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    value: 'react',
    multiple: false,
  },
  argTypes: {
    value: {
      control: 'text',
    },
  },
  render: args => {
    const [{ value }, updateArgs] = useArgs<{ value: string }>();
    return <Chip.Group {...args} value={value} onChange={newValue => updateArgs({ value: newValue as string })} />;
  },
};

export const Radio: Story = {
  args: {
    value: ['react', 'vue'],
    multiple: true,
  },
  argTypes: {
    value: {
      control: 'object',
    },
  },
  render: args => {
    const [{ value }, updateArgs] = useArgs<{ value: string[] }>();
    return <Chip.Group {...args} value={value} onChange={newValue => updateArgs({ value: newValue as string[] })} />;
  },
};
