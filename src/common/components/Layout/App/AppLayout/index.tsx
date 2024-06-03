import React, { PropsWithChildren } from 'react';

import { ConfigProvider, Layout } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { AppFooter, AppHeader } from '@common';

import styles from './AppLayout.module.scss';

const { Content } = Layout;

const AppLayout = ({ children }: PropsWithChildren) => (
  <ConfigProvider locale={ruRU}>
    <Layout className={styles.layout}>
      <AppHeader />
      <Content className={styles.content}>{children}</Content>
      <AppFooter />
    </Layout>
  </ConfigProvider>
);

export default AppLayout;
