import type { Meta, StoryObj } from '@storybook/react';

import InputPassword from './index';

const meta = {
  title: 'UI/Form/InputPassword',
  component: InputPassword,

  tags: ['autodocs'],
} satisfies Meta<typeof InputPassword>;

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
