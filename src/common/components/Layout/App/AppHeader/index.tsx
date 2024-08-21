import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@components';

import ModalCitys from '@common/components/CitysModal';
import ModalLogin from '@common/components/LoginModal';
import useModal from '@common/hooks/useModal';
import { Login, Map } from '@common/icon';

import { useAppSelector } from '@store/hooks';

import Logo from '@assets/Logo.svg?react';

import { Layout } from 'antd';

import styles from './AppHeader.module.scss';
import menuData from './menu-data';

const { Header } = Layout;

const AppHeader = () => {
  const { city } = useAppSelector((state) => state.citys);

  const location = useLocation();

  const {
    isOpenModal: isModalLoginOpen,
    handleOpenModal: handleModalLogin,
    handleCloseModal: handleCloseModalLogin,
  } = useModal();

  const {
    isOpenModal: isModalCitysOpen,
    handleOpenModal: handleModalCity,
    handleCloseModal: handleCloseModalCitys,
  } = useModal();

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
              icon={<Map size={18} />}
              onClick={handleModalCity}
            >
              {city}
            </Button>
            <Button
              type="text"
              size="middle"
              className={styles.login}
              icon={<Login size={18} />}
              onClick={handleModalLogin}
            >
              Войти
            </Button>
          </div>
        </div>
        <ModalLogin open={isModalLoginOpen} onCancel={handleCloseModalLogin} />
        <ModalCitys open={isModalCitysOpen} onCancel={handleCloseModalCitys} />
      </div>
    </Header>
  );
};

export default AppHeader;
