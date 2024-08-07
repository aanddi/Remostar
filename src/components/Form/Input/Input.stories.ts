import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta = {
  title: 'UI/Form/Input',
  component: Input,

  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const Label: Story = {
  args: {
    label: 'Заголовок',
  },
};
