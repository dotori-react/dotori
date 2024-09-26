import { Kbd } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'texts/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    children: {
      control: 'object',
      description: 'The content to be displayed inside the `<kbd>` element.',
    },
    className: {
      control: 'text',
      description: "Additional class names to further customize the component's styling.",
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    children: 'space',
    className: '',
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
