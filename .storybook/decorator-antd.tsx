import { Decorator } from '@storybook/react';
import React from 'react';

import { ConfigProvider } from 'antd';

import theme from '../src/styles/app-them';

// нужен, чтобы обернуть storybook в нашу кастомную тему
const DecoratorAntd: Decorator = (Story) => {
  return (
    <ConfigProvider theme={theme}>
      <Story />
    </ConfigProvider>
  );
};

export default DecoratorAntd;
