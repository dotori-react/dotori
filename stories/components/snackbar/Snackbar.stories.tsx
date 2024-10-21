import { Snackbar } from 'dotori-components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'layout/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  // decorators: Story => (
  //   <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
  //     <Story />
  //   </div>
  // ),
  argTypes: {
    title: {
      control: 'text',
      description: '*(Required)* 	The title text to display in the Snackbar.',
    },
    description: {
      control: 'text',
      description: '*(Optional)* Additional description or content to display under the title.',
      table: {
        defaultValue: {
          detail: '',
        },
      },
    },
    position: {
      control: 'select',
      description: '*(Optional)* The position of the Snackbar on the screen.',
      options: ['top', 'left', 'right', 'bottom', 'leftTop', 'rightTop', 'leftBottom', 'rightBottom'],
      table: {
        defaultValue: {
          detail: 'leftTop',
        },
      },
    },
    delay: {
      control: 'number',
      description: '*(Optional)* Time in milliseconds before the Snackbar is automatically dismissed.',
      table: {
        defaultValue: {
          detail: '5000',
        },
      },
    },
    className: {
      control: 'text',
      description: '*(Optional)* Custom class names to apply to the Snackbar for additional styling.',
      table: {
        defaultValue: { detail: '' },
      },
    },
  },
  args: {
    title: 'title',
    description: 'description',
    position: 'leftTop',
    delay: 5000,
    className: '',
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
