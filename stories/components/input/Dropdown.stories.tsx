import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Dropdown } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content rendered inside the button that toggles the dropdown.',
    },
    contents: {
      control: 'object',
      description: 'The actual content rendered inside the dropdown.',
    },
    color: {
      control: 'select',
      description:
        'Determines the color of the dropdown. Options are `white`, `black`, `blue`, `gray`, `green`, `red`, `yellow`. The default is `white`',
      options: ['white', 'black', 'blue', 'gray', 'green', 'red', 'yellow'],
      table: {
        defaultValue: { summary: 'white' },
      },
    },
    gap: {
      control: 'number',
      description: 'Specifies the spacing between the button and the dropdown. Defaults to `10px`.',
      table: {
        defaultValue: { summary: '10' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'If `true`, the dropdown will match the width of the button.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the button is disabled and cannot be clicked.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the dropdown is open externally.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      action: 'clicked',
      description: 'Function executed when the dropdown is open',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    close: {
      action: 'clicked',
      description: 'Function executed when the dropdown is closed',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    onDropdownClick: {
      action: 'clicked',
      description: 'Function executed when the button is clicked.',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
  },
  args: {
    color: 'white',
    children: 'trigger',
    contents: [['item1', 'item2'].map(item => <div key={item}>{item}</div>)],
    gap: 10,
    fullWidth: false,
    disabled: false,
    isOpen: false,
    close: fn(),
    open: fn(),
    onDropdownClick: fn(),
  },
  render: args => {
    const [{ isOpen }, updateArgs] = useArgs<{ isOpen: boolean }>();

    return (
      <Dropdown
        {...args}
        close={() => updateArgs({ isOpen: false })}
        isOpen={isOpen}
        open={() => updateArgs({ isOpen: true })}
      />
    );
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
