import React from 'react';

import styles from './ServiceItem.module.scss';

interface IServiceProps {
  service: {
    title: string;
    desc?: string;
    salary: string;
  };
}

const ServiceItem = ({ service }: IServiceProps) => (
  <div className={styles.serviceItem}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>{service.title}</div>
        <div className={styles.desc}>{service.desc}</div>
      </div>
      <div className={styles.salary}>от {service.salary}</div>
    </div>
  </div>
);

export default ServiceItem;
