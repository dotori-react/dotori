import { Entity } from 'dotori-components';
import { ENTITY_MAP } from 'dotori-components/constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'texts/Entity',
  component: Entity,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    symbol: {
      control: 'select',
      description: 'A key from `ENTITY_MAP` that determines which entity or symbol to render.',
      options: Object.keys(ENTITY_MAP),
    },
    className: {
      control: 'text',
      description: 'Additional class names for custom styling.',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    symbol: '©',
    className: '',
  },
} satisfies Meta<typeof Entity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
