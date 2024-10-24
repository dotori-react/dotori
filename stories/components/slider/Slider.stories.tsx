import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Slider } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'number',
      description: '*(Optional)* 	The initial value of the slider.',
      table: {
        defaultValue: {
          detail: 'min',
        },
      },
    },
    value: {
      control: 'number',
      description: '*(Optional)* The controlled value of the slider (if you want to control it manually).',
    },
    min: {
      control: 'number',
      description: '*(Optional)* The minimum value the slider can have.',
      table: {
        defaultValue: {
          detail: '0',
        },
      },
    },
    max: {
      control: 'number',
      description: '*(Optional)* The maximum value the slider can have.',
      table: {
        defaultValue: {
          detail: '100',
        },
      },
    },
    step: {
      control: 'number',
      description: '*(Optional)* The amount by which the slider value increases or decreases.',
      table: {
        defaultValue: { detail: '1' },
      },
    },
    showThumb: {
      control: 'boolean',
      description: '*(Optional)* Whether to show the thumb (the draggable circle).',
      table: {
        defaultValue: { detail: 'true' },
      },
    },
    marks: {
      control: 'object',
      description: '*(Optional)* Array of marks to display along the slider.',
      table: {
        defaultValue: { detail: '[]' },
      },
    },
    onChange: {
      actions: 'changed',
      description: '*(Optional)* Callback function that is triggered whenever the slider value changes.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '*(Optional)* The size of the slider and its components.',
      table: {
        defaultValue: { detail: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      description: '*(Optional)* The color of the slider bar and thumb.',
      table: {
        defaultValue: { detail: 'gray' },
      },
    },
    className: {
      control: 'text',
      description: '*(Optional)* Additional CSS classes to customize the appearance of the slider.',
      table: {
        defaultValue: { detail: '' },
      },
    },
  },
  args: {
    defaultValue: 0,
    value: 20,
    min: 0,
    max: 100,
    step: 1,
    showThumb: true,
    marks: [
      { label: '50%', value: 50 },
      { label: '70%', value: 70 },
    ],
    onChange: fn(),
    size: 'md',
    color: 'gray',
    className: '',
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [{ value }, updateArgs] = useArgs<{ value: number }>();

    return <Slider {...args} value={value} onChange={newValue => updateArgs({ value: newValue })} />;
  },
};
