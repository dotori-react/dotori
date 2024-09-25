import { Ellipsis } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'loading/Ellipsis',
  component: Ellipsis,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', description: 'Size variant for the circles.', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    circleTotal: { control: 'number', description: 'Total number of circles to be displayed.' },
    showedCircleTotal: { control: 'number', description: 'Number of circles to show at a time.' },
    firstDelay: { control: 'number', description: 'Number of circles to remain hidden initially.' },
    lastDelay: { control: 'number', description: 'Number of circles to remain hidden after the animation completes.' },
    slow: { control: 'number', description: 'Interval duration for the animation (in milliseconds).' },
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

export const Default: Story = {
  args: {},
};
