import React from 'react';

import { Layout } from 'antd';

import { Link } from 'react-router-dom';
import styles from './AppFooter.module.scss';

const { Footer } = Layout;

const AppFooter = () => (
  <Footer className={styles.footer}>
    <div className="container">
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="src/assets/Logo-white.svg" alt="Логотип" />
          </div>
          <div className={styles.info}>
            <p className={styles.team}>
              © 2024 Ремостар. <Link to="https://github.com/aanddi/Remostar">ANVAL Team</Link>
            </p>
            <p className={styles.university}>
              Крымский инженерно-педагогический университет им. Февзи Якубова
            </p>
            <p className={styles.policy}>
              Использование сайта означает согласие с
              <Link to="/"> Пользовательским соглашением </Link> и
              <Link to="/"> Политикой обработки персональных </Link>
              данных
            </p>
          </div>
        </div>
        <div className={styles.social}>
          <Link to="/">
            <img src="src/assets/social/telegram.svg" alt="Телеграм" />
          </Link>
          <Link to="/">
            <img src="src/assets/social/vkontakte.svg" alt="Вконтакте" />
          </Link>
          <Link to="/">
            <img src="src/assets/social/od.svg" alt="Одноклассники" />
          </Link>
          <Link to="/">
            <img src="src/assets/social/dzen.svg" alt="Яндекс Дзен" />
          </Link>
        </div>
      </div>
    </div>
  </Footer>
);

export default AppFooter;
