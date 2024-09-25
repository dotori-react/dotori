import { Chip } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      description: 'chip size',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'chip default checked',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      control: 'select',
      description: 'chip color',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'black' },
      },
    },
    variant: {
      control: 'select',
      description: 'button category',
      options: ['filled', 'outline', 'subtle'],
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    children: {
      control: 'text',
      description: 'chip text',
    },
    value: {
      control: 'text',
      description: 'input value attribute',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    name: {
      control: 'text',
      description: 'input name attribute',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
  },
  args: {
    size: 'sm',
    defaultChecked: false,
    color: 'black',
    variant: 'filled',
    children: 'chip',
    value: 'chip value',
    name: 'chip name',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    variant: 'filled',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};
