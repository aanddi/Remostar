import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@components';

import { Verify } from '@common';
import formatNumber from '@common/utils/format-price';

import { Avatar, Image, Tag, Tooltip, Watermark } from 'antd';

import { FaHeart } from 'react-icons/fa6';
import { LuMapPin } from 'react-icons/lu';
import { TbMessageReport } from 'react-icons/tb';

import styles from './AnnouncementCard.module.scss';
import IAnnouncementCardProps from './type';

const AnnouncementCard = ({ data }: IAnnouncementCardProps) => {
  const navigate = useNavigate();
  const card = useMemo(
    () => (
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.actionsButton}>
            <div className={styles.actionItem}>
              <FaHeart className={styles.favorite} size={19} />
            </div>
            <Tooltip title="Сообщить о нарушении">
              <div className={styles.actionItem}>
                <TbMessageReport size={22} />
              </div>
            </Tooltip>
          </div>
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
                        <Image src={image.src} className={styles.galleryItem} />
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
                <Link to={`/tender/${data.id}`}>{data?.name}</Link>
                <span>{formatNumber(data?.budget)} ₽</span>
              </div>
              <div className={styles.info}>
                <div className={styles.item}>
                  <LuMapPin size={15} />
                  {data?.adress}
                </div>
              </div>
              <div className={styles.desc}>{data?.desc}</div>
              <div className={styles.tags}>
                {data?.tags.map((tag) => {
                  return (
                    <Tag key={tag.id} bordered={false} color="blue">
                      {tag.name}
                    </Tag>
                  );
                })}
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.user}>
                <Avatar size={40} src="src/assets/User/default-avatar.png" />
                <div className={styles.userAbout}>
                  <div className={styles.name}>
                    {data?.user.name}
                    {data?.user.verify && (
                      <Verify textTooltip="Проверенный пользователь" strokeWidth={1} size={16} />
                    )}
                  </div>
                  <span>{data?.user.type}</span>
                </div>
              </div>
              <div className={styles.actions}>
                <Button type="primary" onClick={() => navigate(`/tender/${data.id}`)}>
                  Подробнее
                </Button>
                <Button type="default">Сделать предложение</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    [data, navigate],
  );

  return card;
};

export default AnnouncementCard;
