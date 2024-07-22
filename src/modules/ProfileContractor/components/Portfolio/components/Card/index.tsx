import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@components';

import { formatNumber } from '@common/utils/formatter';

import { Avatar, Descriptions, Image, Watermark } from 'antd';

import { FaUser } from 'react-icons/fa';

import styles from './Card.module.scss';

import IPortfolioCard from '../../type';

const Card = ({ data }: { data: IPortfolioCard }) => {
  console.log(data);
  const [restDesc, setRestDesc] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          <Swiper
            loop
            spaceBetween={25}
            slidesPerView={1}
            pagination={{ type: 'fraction' }}
            navigation
            modules={[Pagination, Navigation]}
          >
            {data.gallery.map((image) => {
              return (
                <SwiperSlide key={image.key}>
                  <Image.PreviewGroup items={data.gallery}>
                    <Watermark content="Ремостар">
                      <Image src={image.src} />
                    </Watermark>
                  </Image.PreviewGroup>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <div className={styles.header}>
              <div className={styles.name}>
                {data.rooms}-комн. {data.type} {data.footage} м²
              </div>
              <div className={styles.budget}>{formatNumber(data.budget)} ₽</div>
            </div>
            <Descriptions className={styles.info} column={2} size="small">
              <Descriptions.Item label="Тип объекта">{data.type}</Descriptions.Item>
              <Descriptions.Item label="Кол-во комнат">{data.rooms}</Descriptions.Item>
              <Descriptions.Item label="Метраж">{data.footage}</Descriptions.Item>
              <Descriptions.Item label="Сроки"> {data.time}</Descriptions.Item>
              <Descriptions.Item label="Категория">{data.categoryRepair}</Descriptions.Item>
            </Descriptions>
            <div className={styles.desc}>
              <div className={styles.title}>Обзор проекта:</div>
              <div className={restDesc ? styles.fullText : styles.text}>{data.desc}</div>
              <Button className={styles.rest} type="text" onClick={() => setRestDesc(!restDesc)}>
                {restDesc ? 'Скрыть' : 'Прочитать полностью'}
              </Button>
            </div>
          </div>
          <div className={styles.authors}>
            {data.authors.map((author) => {
              return (
                <div key={author.id} className={styles.authorItem}>
                  <Avatar size={35} icon={<FaUser />} />
                  <div className={styles.authorInfo}>
                    <div className={styles.name}>{author.fullName}</div>
                    <div className={styles.role}>{author.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
