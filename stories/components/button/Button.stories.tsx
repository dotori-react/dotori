import { Button } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'button text',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    size: {
      control: 'select',
      description: 'button size',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'xs' },
      },
    },
    variant: {
      control: 'select',
      description: 'button category',
      options: ['filled', 'outline', 'subtle', 'unstyle'],
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    color: {
      control: 'select',
      description: 'button color',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'black' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'button disabled presence or absence',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'button full size presence or absence',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'button className',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    children: 'button',
    size: 'xs',
    variant: 'filled',
    color: 'black',
    disabled: false,
    fullWidth: false,
    className: '',
  },
} satisfies Meta<typeof Button>;

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

export const Unstyle: Story = {
  args: {
    variant: 'unstyle',
  },
};
