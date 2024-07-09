import React, { useState } from 'react';

import { Button, Select, Title } from '@components';

import { IoMdAdd } from 'react-icons/io';

import Card from './components/Card';
import Statistics from './components/Statistics';
import Tags from './components/Tags';

import styles from './Reviews.module.scss';
import sortItems from './constans';
import mock from './mock';

const Reviews = ({ id }: { id?: string }) => {
  console.log(id);
  const [activeTag, setActiveTag] = useState('');

  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <Title title="Отзывы" afterContent={mock.statistics.totalCount} level={3} />
        <Button type="primary" icon={<IoMdAdd />}>
          Написать отзыв
        </Button>
      </div>
      <Statistics data={mock.statistics} />
      <div className={styles.content}>
        <Tags data={mock.tags} activeTag={activeTag} setActiveTag={setActiveTag} />
        <Select options={sortItems} defaultValue={sortItems[0].value} className={styles.sort} />
        <div className={styles.ribbon}>
          {mock.reviews.map((review) => {
            return <Card key={review.id} data={review} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
