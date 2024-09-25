import { Highlight } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'texts/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    highlight: { control: 'object', description: 'The text or array of texts to be highlighted.' },
    highlightStyle: {
      control: 'text',
      description: 'Additional CSS class to apply to the highlighted text(recommend tailwindcss)',
    },
    children: { control: 'text', description: 'The string to be searched for highlights.' },
    ignoreCase: {
      control: 'boolean',
      description: 'Boolean flag to determine case sensitivity in the highlight matching.',
    },
  },
  args: {
    highlight: ['high', 'light'],
    highlightStyle: '',
    children: 'High Light highlight my name is high-light',
    ignoreCase: false,
  },
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
