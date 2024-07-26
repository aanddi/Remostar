import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from './index';

const meta = {
  title: 'UI/Form/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Это ошибка',
  },
};
