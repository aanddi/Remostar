import type { Preview } from '@storybook/react';

import '@styles/index.scss';

import DecoratorAntd from './decorator-antd';

const preview: Preview = {
  parameters: {
    expanded: true,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [DecoratorAntd],
};

export default preview;
