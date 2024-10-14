import { Radio } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    value: {
      control: 'text',
      description: '*(Required)* The value for the radio input, used to determine the selected radio button.',
    },
    label: {
      control: 'text',
      description: '*(Required)* The label to display next to the radio button.',
    },
    size: {
      control: 'select',
      description: '*(Optional)* The size of the radio button.',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      able: {
        defaultValue: {
          detail: 'lg',
        },
      },
    },
    color: {
      control: 'select',
      description: '*(Optional)* The color of the radio button.',
      options: ['black', 'blue', 'gray', 'green', 'red', 'yellow'],
      able: {
        defaultValue: {
          detail: 'black',
        },
      },
    },
    variant: {
      control: 'select',
      description: '*(Optional)* The style of the radio button.',
      options: ['filled', 'outline'],
      able: {
        defaultValue: {
          detail: 'outline',
        },
      },
    },
    renderNode: {
      action: 'object',
      description:
        '*(Optional)* A custom render function that takes hover and selected state and returns custom content.',
    },
  },
  args: {
    value: 'react',
    label: '리액트',
    size: 'lg',
    color: 'black',
    variant: 'outline',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => {
    const { renderNode, ...rest } = args;

    return (
      <Radio.Group name="framework">
        <Radio {...rest} />
      </Radio.Group>
    );
  },
};
