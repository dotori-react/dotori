import { Ellipsis } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'loading/Ellipsis',
  component: Ellipsis,
  tags: ['autodocs'],
  argTypes: {
    circleTotal: {
      control: 'number',
      description: 'Total number of circles to be displayed.',
      table: {
        defaultValue: { summary: '10' },
      },
    },
    showedCircleTotal: {
      control: 'number',
      description: 'Number of circles to show at a time.',
      table: {
        defaultValue: { summary: '5' },
      },
    },
    firstDelay: {
      control: 'number',
      description: 'Number of circles to remain hidden initially.',
      table: {
        defaultValue: { summary: '5' },
      },
    },
    lastDelay: {
      control: 'number',
      description: 'Number of circles to remain hidden after the animation completes.',
      table: {
        defaultValue: { summary: '3' },
      },
    },
    slow: {
      control: 'number',
      description: 'Interval duration for the animation (in milliseconds).',
      table: {
        defaultValue: { summary: '100' },
      },
    },
    size: {
      control: 'select',
      description: 'Size variant for the circles.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
  },
  args: {
    circleTotal: 10,
    showedCircleTotal: 5,
    firstDelay: 5,
    lastDelay: 3,
    slow: 100,
    size: 'lg',
  },
} satisfies Meta<typeof Ellipsis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
