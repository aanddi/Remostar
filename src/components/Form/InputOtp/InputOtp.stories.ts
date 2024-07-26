import type { Meta, StoryObj } from '@storybook/react';

import InputOtp from './index';

const meta = {
  title: 'UI/Form/InputOtp',
  component: InputOtp,

  tags: ['autodocs'],
} satisfies Meta<typeof InputOtp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 5,
  },
};
