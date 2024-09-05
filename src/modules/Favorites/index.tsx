import React from 'react';

import { Title } from '@components';

import styles from './Favorites.module.scss';

const Favorites = () => {
  return (
    <div className={styles.favorites}>
      <div className="container">
        <Title title="Мои избранные" level={2} />
      </div>
    </div>
  );
};

export default Favorites;
