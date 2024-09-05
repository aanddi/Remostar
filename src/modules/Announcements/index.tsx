import React from 'react';

import { Title } from '@components';

import styles from './Announcements.module.scss';

const Announcements = () => {
  return (
    <div className={styles.announcements}>
      <div className="container">
        <Title title="Объявления" level={2} />
      </div>
    </div>
  );
};

export default Announcements;
