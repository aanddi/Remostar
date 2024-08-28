import React, { useEffect, useState } from 'react';
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
  const location = useLocation();

  const { city } = useAppSelector((state) => state.citys);

  const [openMenu, setOpenMenu] = useState(false);

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

  useEffect(() => {
    if (openMenu) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

  return (
    <Header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <div className={`${openMenu && styles.isOpenMenu} ${styles.content}`}>
            <div className={styles.wrapper}>
              <nav className={styles.menu}>
                {menuData.map((item) => {
                  const active = () => {
                    return item.activePath.some(
                      (path) =>
                        location.pathname === path || location.pathname.startsWith(`${path}/`),
                    );
                  };
                  return (
                    <Link
                      key={item.key}
                      to={item.path}
                      className={`${styles.item} ${active() && styles.active}`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              <div className={styles.actions}>
                <Button
                  type="text"
                  size="large"
                  className={styles.city}
                  icon={<Map size={18} />}
                  onClick={handleModalCity}
                >
                  {city}
                </Button>
                <Button
                  type="text"
                  size="large"
                  className={styles.login}
                  icon={<Login size={18} />}
                  onClick={handleModalLogin}
                >
                  Войти
                </Button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className={`${openMenu && styles.isOpen} ${styles.burgerButton}`}
            aria-label="Открыть меню"
          >
            <span />
          </button>
        </div>
      </div>
      <ModalLogin open={isModalLoginOpen} onCancel={handleCloseModalLogin} />
      <ModalCitys open={isModalCitysOpen} onCancel={handleCloseModalCitys} />
    </Header>
  );
};

export default AppHeader;
