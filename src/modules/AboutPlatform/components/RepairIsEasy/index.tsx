import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Title } from '@components';

import styles from './RepairIsEasy.module.scss';

const RepairIsEasy = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <Title title="Ремонт - это проще, чем кажется!" level={1} className={styles.title} />
        <p className={styles.subTitle}>
          Выбирите лучших подрядчиков или разместите обьявление о ремонте
        </p>
        <div className={styles.buttons}>
          <Button
            size="large"
            type="primary"
            onClick={() => navigate({ pathname: '/contractors' })}
          >
            Найти подрядчика
          </Button>
          <Button
            size="large"
            type="primary"
            ghost
            onClick={() => navigate({ pathname: '/tenders' })}
          >
            Найти собственника
          </Button>
        </div>
      </div>
      <div className={styles.bg} />
    </div>
  );
};

export default RepairIsEasy;
