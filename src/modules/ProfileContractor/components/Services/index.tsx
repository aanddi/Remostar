import React from 'react';

import { Title } from '@components';

import ServiceItem from './components/ServiceItem';

import styles from './Services.module.scss';
import mock from './mock';

const Services = ({ id }: { id?: string }) => {
  console.log(id);

  return (
    <section className={styles.services}>
      <Title title="Услуги" afterContent={mock.countServices} level={3} />
      <div className={styles.rabbit}>
        {mock.services.map((item) => {
          return <ServiceItem service={item} />;
        })}
      </div>
    </section>
  );
};

export default Services;
