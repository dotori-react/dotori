import { Input } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      description: '',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    leftIcon: {
      control: 'object',
      description: 'It receives an icon to be placed on the left(ReactNode)',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    rightIcon: {
      control: 'object',
      description: 'It receives an icon to be placed on the right(ReactNode)',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      control: 'text',
      description: 'className attribute',
      table: {
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'input disabled attribute',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    defaultFocused: {
      control: 'boolean',
      description: 'input focused',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'input placeholder attribute',
      table: {
        defaultValue: { summary: '' },
      },
    },
    type: {
      control: 'select',
      description: 'input type attribute',
      options: ['file', 'text'],
      table: {
        defaultValue: { summary: 'text' },
      },
    },
  },
  args: {
    size: 'md',
    leftIcon: '',
    rightIcon: '',
    className: '',
    disabled: false,
    defaultFocused: false,
    placeholder: 'input',
    type: 'text',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
