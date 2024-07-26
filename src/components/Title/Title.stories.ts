import type { Meta, StoryObj } from '@storybook/react';

import Title from './index';

const meta = {
  title: 'UI/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Заголовок',
  },
};

export const AfterContent: Story = {
  args: {
    title: 'Заголовок',
    afterContent: '12',
  },
};
