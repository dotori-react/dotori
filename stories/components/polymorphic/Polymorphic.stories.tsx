import { Polymorphic } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'core/Polymorphic',
  component: Polymorphic,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    as: {
      control: 'text',
      description: '*(Required)* Specifies the type of component or HTML element to render.',
    },
    children: {
      control: 'text',
      description: '*(Optional)* The content to be displayed inside the Polymorphic component.',
    },
  },
  args: {
    as: 'button',
    children: 'button',
  },
} satisfies Meta<typeof Polymorphic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
