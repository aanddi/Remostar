import React from 'react';

import { Title } from '@components';

import { FaEye } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiTreeStructureLight } from 'react-icons/pi';

import styles from './WeDo.module.scss';

const WeDo = () => {
  return (
    <div className={styles.section}>
      <div className={styles.card}>
        <div className={styles.content}>
          <Title title="Мы делаем ремонт удобным" level={2} className={styles.title} />
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <PiTreeStructureLight size={60} />
              </div>
              <Title title="Структурирование" level={3} className={styles.itemTitle} />
              <p className={styles.itemSubTitle}>Разделение ремонтных работ на этапы</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <FaEye size={50} />
              </div>
              <Title title="Контроль" level={3} className={styles.itemTitle} />
              <p className={styles.itemSubTitle}>Оценка работ подрядчика на каждом этапе</p>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <IoDocumentTextOutline size={50} />
              </div>
              <Title title="Документооборот" level={3} className={styles.itemTitle} />
              <p className={styles.itemSubTitle}>Все договоры, сметы, чеки в одном месте</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
