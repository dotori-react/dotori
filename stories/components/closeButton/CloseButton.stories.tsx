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
    },
    color: {
      control: 'select',
      description: 'close button color',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
    },
    withoutHoverColor: {
      control: 'boolean',
      description: 'hovered background color presence or absence',
    },
    className: {
      control: 'text',
      description: 'close button className',
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

export const Default: Story = {
  args: {
    withoutHoverColor: false,
  },
};
