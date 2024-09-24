import { Avatar } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'data display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: 'image alt attribute, also title attribute for placeholder',
    },
    src: {
      control: 'text',
      description: 'image src attribute',
    },
    name: {
      control: 'text',
      description: 'show name text, alternative default profile icon',
    },
    size: {
      control: 'select',
      description: 'avatar size',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    className: {
      control: 'text',
      description: 'avatar className',
    },
  },
  args: {
    alt: 'avatar',
    src: '',
    name: '',
    size: 'sm',
    className: '',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '',
  },
};

export const Name: Story = {
  args: {
    src: '',
    name: 'name',
  },
};
