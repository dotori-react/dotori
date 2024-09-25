import { useEffect, useState } from '@storybook/preview-api';
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
    },
    gap: {
      control: 'number',
      description: 'Specifies the spacing between the button and the dropdown. Defaults to `10px`.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If `true`, the dropdown will match the width of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the button is disabled and cannot be clicked.',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the dropdown is open externally.',
    },
    open: {
      action: 'clicked',
      description: 'Function executed when the dropdown is open',
    },
    close: {
      action: 'clicked',
      description: 'Function executed when the dropdown is closed',
    },
    onDropdownClick: {
      action: 'clicked',
      description: 'Function executed when the button is clicked.',
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
  render: ({ isOpen, ...args }) => {
    const [isShow, setIsShow] = useState(isOpen);

    useEffect(() => {
      setIsShow(isOpen);
    }, [isOpen]);

    return <Dropdown {...args} close={() => setIsShow(false)} isOpen={isShow} open={() => setIsShow(true)} />;
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
