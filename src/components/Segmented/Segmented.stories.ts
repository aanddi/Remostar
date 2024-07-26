import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Segmented from './index';

const mockOptions = [
  { value: 'Значение1', label: 'Заголовок 1' },
  { value: 'Значение2', label: 'Заголовок 2' },
];

const meta = {
  title: 'UI/Segmented',
  component: Segmented,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Segmented>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: mockOptions,
  },
};
