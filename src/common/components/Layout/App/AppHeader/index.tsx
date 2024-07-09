import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@components';

import Logo from '@assets/Logo.svg?react';

import { Layout } from 'antd';

import { FiLogIn } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

import styles from './AppHeader.module.scss';
import menuData from './menu-data';

const { Header } = Layout;

const AppHeader = () => {
  const location = useLocation();

  const handleModalLogin = useCallback(() => {
    console.log('open modal login');
  }, []);

  const handleModalCity = useCallback(() => {
    console.log('open modal city');
  }, []);

  return (
    <Header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.info}>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>
            <nav className={styles.menu}>
              {menuData.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`${styles.item} ${location.pathname === item.path && styles.active}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.actions}>
            <Button
              type="text"
              size="middle"
              className={styles.city}
              icon={<LuMapPin size={18} />}
              onClick={handleModalCity}
            >
              Симферополь
            </Button>
            <Button
              type="text"
              size="middle"
              className={styles.login}
              icon={<FiLogIn size={18} />}
              onClick={handleModalLogin}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
