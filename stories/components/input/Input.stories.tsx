import { Input } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      description: '*(Optional)* Size of the input field.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    leftIcon: {
      control: 'object',
      description: '*(Optional)* left icon element to display inside the input field.',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    rightIcon: {
      control: 'object',
      description: '*(Optional)* right icon element to display inside the input field.',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      control: 'text',
      description: '*(Optional)* Additional class names to apply to the input container.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '*(Optional)* Disables the input field and changes its styling accordingly.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    defaultFocused: {
      control: 'boolean',
      description: '*(Optional)* Automatically focuses the input when it is rendered.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: '*(Optional)* Placeholder text for the input field.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    type: {
      control: 'select',
      description: '*(Optional)* The type of the input field, supports various HTML input types such as text or file.',
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
