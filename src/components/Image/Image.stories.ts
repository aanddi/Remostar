import type { Meta, StoryObj } from '@storybook/react';

import Image from './index';

const meta = {
  title: 'UI/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://bigfoto.name/uploads/posts/2021-10/1635087393_55-bigfoto-name-p-etapi-remonta-vo-vtorichnoi-kvartire-103.jpg',
  },
};
