import React from 'react';

import { Title } from '@components';

import styles from './Chats.module.scss';

const Chats = () => {
  return (
    <div className={styles.сhats}>
      <div className="container">
        <Title title="Чаты" level={2} />
      </div>
    </div>
  );
};

export default Chats;
