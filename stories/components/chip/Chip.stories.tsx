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
    },
    defaultChecked: {
      control: 'boolean',
      description: 'chip default checked',
    },
    color: {
      control: 'select',
      description: 'chip color',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
    },
    variant: {
      control: 'select',
      description: 'button category',
      options: ['filled', 'outline', 'subtle'],
    },
    children: {
      control: 'text',
      description: 'chip text',
    },
    value: {
      control: 'text',
      description: 'input value attribute',
    },
    name: {
      control: 'text',
      description: 'input name attribute',
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

export const Default: Story = {
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
