import type { Meta, StoryObj } from '@storybook/react';

import Progress from './index';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: 20,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Заголовок',
    percent: 20,
  },
};
