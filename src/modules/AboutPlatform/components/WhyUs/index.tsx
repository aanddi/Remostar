import React from 'react';

import { Title } from '@components';

import styles from './WhyUs.module.scss';

const WhyUs = () => {
  return (
    <div className={styles.section}>
      <Title title="Почему мы?" level={2} className={styles.title} />
      <div className={styles.cards}>
        <div className={styles.card} style={{ backgroundColor: '#E9F9EF' }}>
          <div className={styles.content}>
            <Title
              title="Осознанный выбор"
              level={3}
              className={`${styles.titleCard} ${styles.titleCard1}`}
            />
            <p className={styles.subTitle}>
              Благодаря отзывам, фильтрам и подробным профилям подрядчиков вы точно найдете того кто
              вам нужен!
            </p>
          </div>
        </div>
        <div className={styles.card} style={{ backgroundColor: '#DFF4FC' }}>
          <div className={styles.content}>
            <Title
              title="Большой выбор"
              level={3}
              className={`${styles.titleCard} ${styles.titleCard2}`}
            />
            <p className={styles.subTitle}>
              На нашей платформе Вы найдете большое количество подрядчиков со всей России!
            </p>
          </div>
        </div>
        <div className={styles.card} style={{ backgroundColor: '#F3F6FD' }}>
          <div className={styles.content}>
            <Title
              title="Надежность"
              level={3}
              className={`${styles.titleCard} ${styles.titleCard3}`}
            />
            <p className={styles.subTitle}>
              Мы ценим ваше время, поэтому размещяем только проверенных подрядчиков!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
