import React from 'react';

import { Title } from '@components';

import { Descriptions } from 'antd';

import styles from './AboutUs.module.scss';
import mock from './mock';

const notIndicated = 'Не указано';
const fontSize = '16px';

const AboutUs = ({ id }: { id?: string }) => {
  console.log(id);
  return (
    <section className={styles.about}>
      <Title title="О нас" level={3} />
      <div className={styles.wrapper}>
        <Descriptions
          className={styles.info}
          contentStyle={{ fontSize }}
          labelStyle={{ fontSize }}
          column={2}
        >
          <Descriptions.Item label="Размер компании">
            {mock.sizeCompany ?? notIndicated}
          </Descriptions.Item>
          <Descriptions.Item label="Телефон"> {mock.phone ?? notIndicated}</Descriptions.Item>
          <Descriptions.Item label="Сайт компании">
            {mock.durationOfWork ?? notIndicated}
          </Descriptions.Item>
          <Descriptions.Item label="Юр. название">
            {mock.legalName ?? notIndicated}
          </Descriptions.Item>
          <Descriptions.Item label="Кухня">{mock.inn ?? notIndicated}</Descriptions.Item>
        </Descriptions>
        <div className={styles.desc}>{mock.desc}</div>
      </div>
    </section>
  );
};

export default AboutUs;
