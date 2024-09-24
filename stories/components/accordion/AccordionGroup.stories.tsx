import { Accordion } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'data display/AccordionGroup',
  component: Accordion.Group,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description:
        'On initial rendering, it displays the accordion that matches the value in the children in an open state.',
    },
    multiple: {
      control: 'boolean',
      description: 'It determines whether multiple accordions within the group can remain open simultaneously.',
    },
    children: {
      control: 'object',
      description:
        'It receives Accordion components as children, which have Accordion.Control and Accordion.Panel as their children.',
    },
  },
  args: {
    defaultValue: 'accordion1',
    multiple: false,
    children: (
      <>
        <Accordion value="accordion1">
          <Accordion.Control>accordion1 control</Accordion.Control>
          <Accordion.Panel>accordion1 panel</Accordion.Panel>
        </Accordion>
        <Accordion value="accordion2">
          <Accordion.Control>accordion2 control</Accordion.Control>
          <Accordion.Panel>accordion2 panel</Accordion.Panel>
        </Accordion>
      </>
    ),
  },
} satisfies Meta<typeof Accordion.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
