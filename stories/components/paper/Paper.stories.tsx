import { Paper } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Paper',
  component: Paper,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      // 👇 Set default background value for all component stories
      default: 'Dark',
    },
  },
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    size: {
      control: 'select',
      description: "*(Optional)* Determines the width of the Paper component. One of 'xs' | 'sm' | 'md' | 'lg' | 'xl'.",
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description:
        '*(Optional)* A boolean that, if true, makes the Paper component occupy the full width of its container.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: "*(Optional)* Additional class names to customize the Paper component's appearance.",
      table: {
        defaultValue: { summary: '' },
      },
    },
    children: {
      control: 'object',
      description: '*(Optional)* The content to be displayed inside the Paper component.',
    },
  },
  args: {
    size: 'md',
    fullWidth: false,
    className: '',
    children: 'paper contents',
  },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
