import { Image } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'core/Image',
  component: Image,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    src: {
      control: 'text',
      description: 'image src attribute',
      table: {
        defaultValue: { summary: '' },
      },
    },
    title: {
      control: 'text',
      description: 'A hidden title for screen readers, useful for adding context.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    alt: {
      control: 'text',
      description: 'The alt text for the image. This is required for accessibility.',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    src: 'https://placehold.co/400',
    title: 'placeholder',
    alt: 'mock image',
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
