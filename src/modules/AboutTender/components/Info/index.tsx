import React from 'react';

import { IInfo } from '@modules/AboutTender/type';

import { Description, Title } from '@components';

import styles from './Info.module.scss';

const Info = ({ data }: { data: IInfo }) => {
  return (
    <div className={styles.info}>
      <Title title="Общая информация" level={4} />
      <div className={styles.content}>
        <Description label="Площадь" size={16} labelWidth={90}>
          {data.square} м²
        </Description>
        <Description label="Комнат" size={16} labelWidth={90}>
          {data.rooms}
        </Description>
        <Description label="Этаж" size={16} labelWidth={90}>
          {data.floor}
        </Description>
        <Description label="Отделка" size={16} labelWidth={90}>
          {data.finishing}
        </Description>
        <Description label="Кухня" size={16} labelWidth={90}>
          {data.squareKitchen} м²
        </Description>
        <Description label="Жилая" size={16} labelWidth={90}>
          {data.squareLived} м²
        </Description>
      </div>
    </div>
  );
};

export default Info;
