import React from 'react';

import { IAside } from '@modules/AboutTender/type';

import { Button } from '@components';

import { Verify } from '@common';
import { formatNumber } from '@common/utils/formatter';

import { Avatar } from 'antd';

import { FaHeart } from 'react-icons/fa6';
import { LuMapPin } from 'react-icons/lu';
import { TbMessageReport } from 'react-icons/tb';

import styles from './Aside.module.scss';

interface IAsideProps {
  className: string;
  data: IAside;
}

const Aside = ({ data, className }: IAsideProps) => {
  return (
    <aside className={`${styles.aside} ${className}`}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              {data.rooms}-комн. {data.type} {data.footage} м²
            </div>
            <div className={styles.salary}>{formatNumber(data.budget)} ₽ </div>
            <div className={styles.adress}>
              <LuMapPin size={18} />
              <span>{data.adress.location}</span>
            </div>
            <div className={styles.user}>
              <Avatar>{data.contact.fullName[0]}</Avatar>
              <div className={styles.name}>
                {data.contact.fullName} {data.contact.verify && <Verify size={16} />}
              </div>
            </div>
            <Button type="primary" size="large" className={styles.button}>
              Сделать предложение
            </Button>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.item}>
            <FaHeart className={styles.favorite} size={19} />
            <span>Избранное</span>
          </div>
          <div className={styles.item}>
            <TbMessageReport className={styles.icon} size={22} />
            <span>Пожаловаться</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
