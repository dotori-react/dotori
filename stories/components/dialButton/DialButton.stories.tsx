import { DialButton } from 'dotori-components';
import { Icon } from 'dotori-icons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/DialButton',
  component: DialButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    dialIcon: {
      control: 'object',
      description: 'dial icon',
      table: {
        defaultValue: { summary: '<Icon />' },
      },
    },
    size: {
      control: 'select',
      description: 'dial button icon, action icon size',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: '' },
      },
    },
    color: {
      control: 'select',
      description:
        'dial icon color and dial button background contrast, color is based on dial button background color',
      options: ['white', 'black'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    actions: {
      control: 'object',
      description: 'actions list',
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    withoutTooltip: {
      control: 'boolean',
      description: 'action icon hovered tooltip presence or absence',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    size: 'md',
    actions: [{ icon: <Icon icon="star" />, name: 'star' }],
    withoutTooltip: false,
  },
} satisfies Meta<typeof DialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    withoutTooltip: false,
  },
};
