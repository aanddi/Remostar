import React from 'react';

import { IAdress } from '@modules/AboutTender/type';

import { Title } from '@components';

import styles from './Location.module.scss';

const Location = ({ data }: { data: IAdress }) => {
  return (
    <div className={styles.location}>
      <Title title="Расположение" level={4} />
      <div className={styles.adress}>{data.location}</div>
      <iframe
        title="Карта с расположением"
        src={data.map}
        className={styles.map}
        width="100%"
        height="500"
      />
    </div>
  );
};

export default Location;
