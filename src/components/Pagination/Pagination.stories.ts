import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './index';

const meta = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultCurrent: 2,
    total: 100,
  },
};
