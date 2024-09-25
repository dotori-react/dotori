import { Input } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', description: '', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    leftIcon: { control: 'text', description: 'It receives an icon to be placed on the left(ReactNode)' },
    rightIcon: { control: 'text', description: 'It receives an icon to be placed on the right(ReactNode)' },
    className: { control: 'text', description: 'className attribute' },
    disabled: { control: 'boolean', description: 'input disabled attribute' },
    defaultFocused: { control: 'boolean', description: 'input focused' },
    placeholder: { control: 'text', description: 'input placeholder attribute' },
    type: { control: 'select', description: 'input type attribute', options: ['file', 'text'] },
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

export const Default: Story = {
  args: {},
};
