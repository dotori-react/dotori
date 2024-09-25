import { Card } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the Card, which can include any JSX.',
    },
    className: {
      control: 'text',
      description: 'Optional, for custom styling. Merged with the cardStyle.',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt harum ullam perspiciatis, minus ad eos a consequatur dolor! Harum aliquid animi in explicabo voluptatem! Quisquam inventore, aliquid illo voluptatem assumenda sequi dignissimos sint fugit esse reiciendis dolorem, veritatis optio ipsum aperiam perspiciatis iste? Ab porro, quasi placeat praesentium minus doloremque?',
    className: '',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
