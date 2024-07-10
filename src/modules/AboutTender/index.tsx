import React from 'react';

import { Breadcrumb, GalleryThumbs } from '@components';

import { Aside, Description, Info, Location } from './components';

import styles from './AboutTender.module.scss';
import mock from './mock';

const itemsBreadcrumb = [
  {
    title: 'Поиск собственника',
    href: '/tenders',
  },
  {
    title: 'Название',
  },
];

const AboutTender = () => {
  const { rooms, type, footage, budget, adress, contact } = mock;
  const card = { rooms, type, footage, budget, adress, contact };
  return (
    <div className={styles.tender}>
      <div className="container">
        <Breadcrumb items={itemsBreadcrumb} />
        <div className={styles.date}>Опубликованно: {mock.published}</div>
        <div className={styles.content}>
          <div className={styles.body}>
            <GalleryThumbs data={mock.gallery} className={styles.slider} />
            <Info data={mock.info} />
            <Description data={mock.desc} />
            <Location data={mock.adress} />
          </div>
          <Aside data={card} className={styles.aside} />
        </div>
      </div>
    </div>
  );
};

export default AboutTender;
