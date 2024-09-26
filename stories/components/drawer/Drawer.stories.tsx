import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Button, Drawer } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'The drawer can be rendered in full width for larger viewports.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    close: {
      actions: 'clicked',
      description:
        'A function to close the drawer, typically passed to the outside click handler and the close button.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If `true`, the drawer will occupy the full width of the viewport. Default is `false`.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the drawer.(JSX)',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
  },
  args: {
    isOpen: false,
    close: fn(),
    fullWidth: false,
    children: 'drawer',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const [{ isOpen }, updateArgs] = useArgs<{ isOpen: boolean }>();
    return (
      <div>
        <Button onClick={() => updateArgs({ isOpen: !isOpen })}>trigger Drawer!</Button>
        <Drawer {...args} close={() => updateArgs({ isOpen: false })} isOpen={isOpen} />
      </div>
    );
  },
};
