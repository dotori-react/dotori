import { CloseButton } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      description: 'close button size',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      description: 'close button color',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'black' },
      },
    },
    withoutHoverColor: {
      control: 'boolean',
      description: 'hovered background color presence or absence',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'close button className',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: {
    size: 'md',
    color: 'black',
    withoutHoverColor: false,
    className: '',
  },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    withoutHoverColor: false,
  },
};
