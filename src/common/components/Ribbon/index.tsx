import React, { ReactNode } from 'react';
import { Typography } from 'antd';
import styles from './Ribbon.module.scss';

interface IribbonProps {
  children: ReactNode;
  fullCount: number;
}

const Ribbon = ({ children, fullCount }: IribbonProps) => {
  return (
    <section className={styles.ribbon}>
      <div className="container">
        <div className={styles.wrapper}>
          <Typography.Title level={5} className={styles.count}>
            Найдено: {fullCount}
          </Typography.Title>
          <div className={styles.list}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Ribbon;
