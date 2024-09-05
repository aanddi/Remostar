import React from 'react';

import { Title } from '@components';

import styles from './MyCompany.module.scss';

const MyCompany = () => {
  return (
    <div className={styles.company}>
      <div className="container">
        <Title title="Моя компания" level={2} />
      </div>
    </div>
  );
};

export default MyCompany;
