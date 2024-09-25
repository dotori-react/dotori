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
      table: {
        defaultValue: { summary: '' },
      },
    },
    name: {
      control: 'text',
      description: 'show name text, alternative default profile icon',
      table: {
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      description: 'avatar size',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    className: {
      control: 'text',
      description: 'avatar className',
      table: {
        defaultValue: { summary: '' },
      },
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

export const Example: Story = {
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
