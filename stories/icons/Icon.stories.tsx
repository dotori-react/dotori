import { Icon as DotoriIcon } from 'dotori-icons';
import { ICON_MAP } from 'dotori-icons/constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'icons/Icon',
  component: DotoriIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fullSize: { control: 'boolean', description: 'icon full size presence or absence' },
    size: {
      control: 'select',
      description: 'icon size',
      options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    icon: {
      control: 'select',
      description: 'icon category',
      options: Object.keys(ICON_MAP),
    },
    className: { control: 'text', description: 'class name' },
  },
  args: {
    fullSize: false,
    icon: 'close',
    size: 'md',
    className: '',
  },
} satisfies Meta<typeof DotoriIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    icon: 'close',
  },
};
