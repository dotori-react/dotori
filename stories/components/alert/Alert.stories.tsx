import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Alert } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'alerts/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text', description: 'An optional icon to display alongside the alert message.' },
    title: { control: 'text', description: 'The title of the alert.' },
    children: { control: 'text', description: 'Any additional content to be displayed within the alert.' },
    color: {
      control: 'select',
      description: "Defines the alert's color theme (like blue, red, etc.).",
      options: ['blue', 'gray', 'green', 'red', 'yellow'],
    },
    className: { control: 'text', description: 'Additional class names to be applied.' },
    isOpen: { control: 'boolean', description: 'A boolean to determine if the alert is visible.' },
    close: { actions: 'clicked', description: 'A function to handle closing the alert.' },
  },
  args: {
    icon: 'icon',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis eaque ducimus velit eos nesciunt quae assumenda voluptas sequi blanditiis soluta aperiam quasi at autem voluptatem in, harum quas nulla.',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem culpa vero enim distinctio dolor pariatur provident quisquam tenetur ullam odio, facilis quidem ratione quos nihil fuga voluptatum cumque laborum? Sit, minima quis! Atque vitae deleniti, nulla, ex quisquam impedit quibusdam facere ullam labore laboriosam eius perferendis doloremque esse dignissimos.',
    color: 'gray',
    className: '',
    isOpen: true,
    close: fn(),
  },
  render(args) {
    const [{ isOpen }, updateArgs] = useArgs<{ isOpen: boolean }>();

    return <Alert {...args} close={() => updateArgs({ isOpen: false })} isOpen={isOpen} />;
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
