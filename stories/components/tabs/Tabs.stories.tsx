import { Tabs } from 'dotori-components';
import { Icon } from 'dotori-icons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  decorators: Story => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '*(Optional)*',
    },
    children: {
      control: 'object',
      description: '*(Optional)*',
    },
  },
  args: {
    defaultValue: 'react',
    children: (
      <>
        <Tabs.TabList>
          <Tabs.Tab leftIcon={<Icon className="h-3 w-3" icon="close" />} value="react">
            리액트
          </Tabs.Tab>
          <Tabs.Tab value="vue">뷰</Tabs.Tab>
          <Tabs.Tab value="angular">앵귤러</Tabs.Tab>
        </Tabs.TabList>

        <Tabs.Panel value="react">리액트는 사랑입니다.</Tabs.Panel>
        <Tabs.Panel value="vue">뷰는 좋아합니다.</Tabs.Panel>
        <Tabs.Panel value="angular">앵귤러는 모릅니다.</Tabs.Panel>
      </>
    ),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
