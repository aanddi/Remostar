import React, { PropsWithChildren } from 'react';

import { AppFooter, AppHeader } from '@common/components';

import { FloatButton, Layout } from 'antd';

import { FaArrowUp } from 'react-icons/fa6';

import styles from './AppLayout.module.scss';

const { Content } = Layout;

const AppLayout = ({ children }: PropsWithChildren) => (
  <Layout className={styles.layout}>
    <AppHeader />
    <Content className={styles.content}>{children}</Content>
    <FloatButton.BackTop icon={<FaArrowUp />} />
    <AppFooter />
  </Layout>
);

export default AppLayout;
