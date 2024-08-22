import React from 'react';

import { Title } from '@components';

import styles from './WhereToStart.module.scss';

const WhereToStart = () => {
  return (
    <div className={styles.section}>
      <Title title="С чего начать?" level={2} className={styles.title} />
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.order}>1</div>
            <p className={styles.instruction}>Пройдите простую регистрацию на платформе Ремостар</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.order}>2</div>
            <p className={styles.instruction}>
              Выберите подходящего подрядчика на сервисе Ремостар
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.order}>3</div>
            <p className={styles.instruction}>
              Отслеживайте все ремонтные процессы и отслеживайте отчестность
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereToStart;
