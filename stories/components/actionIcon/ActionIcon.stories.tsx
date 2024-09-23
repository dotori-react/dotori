import { ActionIcon as DotoriActionIcon } from 'dotori-components';
import { ICON_MAP } from 'dotori-icons/constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/ActionIcon',
  component: DotoriActionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    icon: {
      control: 'select',
      description: 'action icon category',
      options: Object.keys(ICON_MAP),
    },
    size: {
      control: 'select',
      description: 'action icon size',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      description: 'action icon color, hovered background color',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
    },
    withoutHoverColor: {
      control: 'boolean',
      description: 'hovered background color presence or absence',
    },
    className: {
      control: 'text',
      description: 'action icon button className',
    },
  },
  args: {
    icon: 'close',
    size: 'md',
    color: 'black',
    withoutHoverColor: false,
    className: '',
  },
} satisfies Meta<typeof DotoriActionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionIcon: Story = {
  args: {
    icon: 'close',
  },
};
