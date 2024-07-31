import React from 'react';

import Logo from '@assets/Logo.svg?react';

import { Spin } from 'antd';

import styles from './FullScreenLoader.module.scss';

const FullScreenLoader = () => {
  return (
    <div className={styles.load}>
      <Logo />
      <Spin size="large" />
    </div>
  );
};

export default FullScreenLoader;
