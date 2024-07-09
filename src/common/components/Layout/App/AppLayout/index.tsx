import React, { PropsWithChildren } from 'react';

import { AppFooter, AppHeader } from '@common';

import { ConfigProvider, FloatButton, Layout } from 'antd';
import ruRU from 'antd/locale/ru_RU';

import { FaArrowUp } from 'react-icons/fa6';

import styles from './AppLayout.module.scss';

const { Content } = Layout;

const AppLayout = ({ children }: PropsWithChildren) => (
  <ConfigProvider locale={ruRU}>
    <Layout className={styles.layout}>
      <AppHeader />
      <Content className={styles.content}>{children}</Content>
      <FloatButton.BackTop icon={<FaArrowUp />} />
      <AppFooter />
    </Layout>
  </ConfigProvider>
);

export default AppLayout;
