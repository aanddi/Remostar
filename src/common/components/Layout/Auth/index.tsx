import React, { PropsWithChildren } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@components';

import Logo from '@assets/Logo.svg?react';

import { Layout } from 'antd';

import { IoIosArrowBack } from 'react-icons/io';

import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <Layout className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <Button type="primary" icon={<IoIosArrowBack size={20} />} onClick={() => navigate(-1)}>
            Назад
          </Button>
        </header>
        <main>{children}</main>
      </div>
    </Layout>
  );
};

export default AuthLayout;
