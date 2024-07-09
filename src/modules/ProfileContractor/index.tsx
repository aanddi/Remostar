import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Tabs } from '@components';

import { HiBriefcase, HiChatAlt2, HiHome } from 'react-icons/hi';
import { HiMiniClipboardDocumentCheck } from 'react-icons/hi2';

import { AboutUs, Header, Portfolio, Reviews, Services } from './components';

import styles from './ProfileContractor.module.scss';
import './ProfileContractor.scss';
import { PortfolioEnum } from './types';

const ICON_SIZE = 25;

const ProfileContractor = () => {
  const { id } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const queryParamValue = queryParams.get('view');

  const items = useMemo(
    () => [
      {
        key: PortfolioEnum.about,
        label: 'О нас',
        children: <AboutUs id={id} />,
        icon: <HiHome size={ICON_SIZE} />,
      },
      {
        key: PortfolioEnum.services,
        label: 'Услуги',
        children: <Services id={id} />,
        icon: <HiBriefcase size={ICON_SIZE} />,
      },
      {
        key: PortfolioEnum.portfolio,
        label: 'Портфолио',
        children: <Portfolio id={id} />,
        icon: <HiMiniClipboardDocumentCheck size={ICON_SIZE} />,
      },
      {
        key: PortfolioEnum.reviews,
        label: 'Отзывы',
        children: <Reviews id={id} />,
        icon: <HiChatAlt2 size={ICON_SIZE} />,
      },
    ],
    [id],
  );

  return (
    <div className={styles.profile}>
      <div className="container">
        <Header id={id} />
        <Tabs
          className={`tabsProfile ${styles.tabs}`}
          defaultActiveKey={queryParamValue ?? PortfolioEnum.about}
          items={items}
        />
      </div>
    </div>
  );
};

export default ProfileContractor;
