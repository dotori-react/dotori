import { OnePage } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/OnePage',
  component: OnePage,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description: '*(Optional)* The content to be displayed within the OnePage component.',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      control: 'text',
      description: "*(Optional)* Additional class names can be passed to further customize the component's styling.",
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    children: null,
    className: '',
  },
} satisfies Meta<typeof OnePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: args => (
    <>
      <OnePage
        {...args}
        style={{
          backgroundColor: 'lightcoral',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 50,
        }}>
        1
      </OnePage>
      <OnePage
        {...args}
        style={{
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 50,
        }}>
        2
      </OnePage>
      <OnePage
        {...args}
        style={{
          backgroundColor: 'lightpink',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 50,
        }}>
        3
      </OnePage>
      <OnePage
        {...args}
        style={{
          backgroundColor: 'lightgreen',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 50,
        }}>
        4
      </OnePage>
    </>
  ),
};
