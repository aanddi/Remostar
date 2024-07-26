import type { Meta, StoryObj } from '@storybook/react';

import Rate from './index';

const meta = {
  title: 'UI/Rate',
  component: Rate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 4,
  },
};

export const Disabled: Story = {
  args: {
    value: 4,
    disabled: true,
  },
};
