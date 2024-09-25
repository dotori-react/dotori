import { Mark } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'texts/Mark',
  component: Mark,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text', description: 'mark className attribute' },
    children: { control: 'text', description: 'mark text' },
  },
  args: {
    className: '',
    children: 'text emphasize',
  },
} satisfies Meta<typeof Mark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
