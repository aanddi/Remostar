import React from 'react';

import { Title } from '@components';

import Card from './components/Card';

import styles from './Portfolio.module.scss';
import mock from './mock';

const Portfolio = ({ id }: { id?: string }) => {
  console.log(id);
  return (
    <section className={styles.portfolio}>
      <Title title="Портфолио" afterContent={mock.length} level={3} />
      <div className={styles.ribbon}>
        {mock.map((work) => {
          return <Card key={work.id} data={work} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
