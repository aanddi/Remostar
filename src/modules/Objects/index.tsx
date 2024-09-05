import React from 'react';

import { Title } from '@components';

import styles from './Objects.module.scss';

const Objects = () => {
  return (
    <div className={styles.objects}>
      <div className="container">
        <Title title="Объекты" level={2} />
      </div>
    </div>
  );
};

export default Objects;
