import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

import { GrAddCircle } from 'react-icons/gr';

import Button from './index';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Кнопка',
    type: 'default',
    size: 'large',
  },
};

export const Primary: Story = {
  args: {
    children: 'Кнопка',
    type: 'primary',
    size: 'large',
  },
};

export const Text: Story = {
  args: {
    children: 'Кнопка',
    type: 'text',
    size: 'large',
  },
};

export const Link: Story = {
  args: {
    children: 'Кнопка',
    type: 'link',
    size: 'large',
  },
};

export const Dashed: Story = {
  args: {
    children: 'Кнопка',
    type: 'dashed',
    size: 'large',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Кнопка',
    type: 'primary',
    size: 'large',
    ghost: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Кнопка',
    type: 'primary',
    size: 'large',
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    children: 'Кнопка',
    type: 'primary',
    size: 'large',
    icon: <GrAddCircle />,
  },
};
