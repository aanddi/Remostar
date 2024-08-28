import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '@assets/Logo-white.svg?react';
import Dzen from '@assets/social/dzen.svg?react';
import Od from '@assets/social/od.svg?react';
import Telegram from '@assets/social/telegram.svg?react';
import Vk from '@assets/social/vkontakte.svg?react';

import { Layout } from 'antd';

import styles from './AppFooter.module.scss';

const { Footer } = Layout;

const AppFooter = () => (
  <Footer className={styles.footer}>
    <div className="container">
      <div className={styles.body}>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
          <div className={styles.info}>
            <p className={styles.team}>
              © 2024 Ремостар. <Link to="https://github.com/aanddi/Remostar">ANVAL Team</Link>
            </p>
            <p className={styles.university}>
              Крымский инженерно-педагогический университет им. Февзи Якубова
            </p>
            <p className={styles.policy}>
              Использование сайта означает согласие с{' '}
              <Link to="/">Пользовательским соглашением</Link> и{' '}
              <Link to="/">Политикой обработки персональных</Link> данных
            </p>
          </div>
        </div>
        <div className={styles.social}>
          <Link to="/">
            <Telegram />
          </Link>
          <Link to="/">
            <Vk />
          </Link>
          <Link to="/">
            <Od />
          </Link>
          <Link to="/">
            <Dzen />
          </Link>
        </div>
      </div>
    </div>
  </Footer>
);

export default AppFooter;
