import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Button, Modal } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'A boolean that determines whether the modal is visible or not.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the modal.',
    },
    close: {
      actions: 'clicked',
      description: 'A function that triggers the closing of the modal.',
    },
  },
  args: {
    isOpen: false,
    children: 'modal contents',
    close: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [{ isOpen }, updateArgs] = useArgs<{ isOpen: boolean }>();
    return (
      <>
        <Button onClick={() => updateArgs({ isOpen: true })}>Modal Open!</Button>
        <Modal {...args} close={() => updateArgs({ isOpen: false })} isOpen={isOpen} />
      </>
    );
  },
};
