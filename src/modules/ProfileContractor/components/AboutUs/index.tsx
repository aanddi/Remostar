import React from 'react';

import { Description, Title } from '@components';

import styles from './AboutUs.module.scss';
import mock from './mock';

const notIndicated = 'Не указано';

const AboutUs = ({ id }: { id?: string }) => {
  console.log(id);
  return (
    <section className={styles.about}>
      <Title title="О нас" level={3} />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Description label="Размер компании" size={16}>
            {mock.sizeCompany ?? notIndicated}
          </Description>
          <Description label="Телефон" size={16}>
            {mock.phone ?? notIndicated}
          </Description>
          <Description label="Сайт компании" size={16}>
            {mock.site ?? notIndicated}
          </Description>
          <Description label="На рынке" size={16}>
            {mock.durationOfWork ?? notIndicated}
          </Description>
          <Description label="Юр. название" size={16}>
            {mock.legalName ?? notIndicated}
          </Description>
          <Description label="ИНН" size={16}>
            {mock.inn ?? notIndicated}
          </Description>
        </div>
        <div className={styles.desc}>{mock.desc}</div>
      </div>
    </section>
  );
};

export default AboutUs;
