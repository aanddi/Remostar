import React, { useCallback } from 'react';
import { Button } from '@components';
import { Layout } from 'antd';
import { LogIn, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
            <div className={styles.logo}>
              <img src="src/assets/Logo.svg" alt="Логотип" className="logo" />
            </div>
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
              size="large"
              className={styles.city}
              icon={<MapPin size={18} />}
              onClick={handleModalCity}
            >
              Симферополь
            </Button>
            <Button
              type="text"
              size="large"
              className={styles.login}
              icon={<LogIn size={18} />}
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
