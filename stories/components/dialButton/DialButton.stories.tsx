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
      control: 'text',
      description: 'require ReactNode for dial icon',
    },
    size: {
      control: 'select',
      description: 'dial button icon, action icon size',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      description:
        'dial icon color and dial button background contrast, color is based on dial button background color',
      options: ['white', 'black'],
    },
    actions: {
      control: 'object',
      description: 'actions list',
    },
    withoutTooltip: {
      control: 'boolean',
      description: 'action icon hovered tooltip presence or absence',
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

export const Default: Story = {
  args: {
    withoutTooltip: false,
  },
};
