import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import InputNumber from './index';

const meta = {
  title: 'UI/Form/InputNumber',
  component: InputNumber,

  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Заголовок',
  },
};
