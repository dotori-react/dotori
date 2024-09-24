import { Avatar } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'data display/AvatarGroup',
  component: Avatar.Group,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description: 'ReactNode',
    },
    direction: {
      control: 'select',
      description: 'avatar sort direction',
      options: ['col', 'row', 'reverseRow', 'reverseCol'],
    },
  },
  args: {
    children: (
      <>
        <Avatar alt="avatar" />
        <Avatar alt="avatar" />
      </>
    ),
    direction: 'row',
  },
} satisfies Meta<typeof Avatar.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'row',
  },
};
