import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Breadcrumb from './index';

const mockItem = [
  {
    title: 'Страница 1',
    href: '/',
  },
  {
    title: 'Страница 2',
    href: '/',
  },
  {
    title: 'Страница 3',
  },
];

const meta = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: mockItem,
    buttonBack: false,
  },
};

export const ButtonBack: Story = {
  args: {
    items: mockItem,
    buttonBack: true,
  },
};
