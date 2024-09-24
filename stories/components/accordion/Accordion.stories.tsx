import { Accordion } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'data display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'if you use the Accordion.Group component, it is required; if not, it is optional',
    },
    children: {
      control: 'object',
      description: 'it receives Accordion.Control and Accordion.Panel as children',
    },
  },
  args: {
    value: 'accordion',
    children: (
      <>
        <Accordion.Control>control</Accordion.Control>
        <Accordion.Panel>panel</Accordion.Panel>
      </>
    ),
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
