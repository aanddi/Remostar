import React from 'react';

import { Title } from '@components';

import styles from './Registration.module.scss';

const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className="container">
        <Title title="Регистрация" level={2} />
      </div>
    </div>
  );
};

export default Registration;
