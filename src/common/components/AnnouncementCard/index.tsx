import React, { useMemo } from 'react';

import { Avatar, Image, Tag, Tooltip, Watermark } from 'antd';
import { LuMapPin } from 'react-icons/lu';
import { GoShieldCheck } from 'react-icons/go';
import { Button, Carousel } from '@components';
import { FaHeart } from 'react-icons/fa6';
import { TbMessageReport } from 'react-icons/tb';
import formatPrice from '@common/utils/format-price';
import { Link } from 'react-router-dom';
import styles from './AnnouncementCard.module.scss';
import IAnnouncementCardProps from './type';

const AnnouncementCard = ({ data }: IAnnouncementCardProps) => {
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
            <Watermark content="Ремостар">
              <Image.PreviewGroup items={data.gallery}>
                <Carousel arrows infinite>
                  {data.gallery.map((image) => {
                    return <Image src={image.src} className={styles.galleryItem} />;
                  })}
                </Carousel>
              </Image.PreviewGroup>
            </Watermark>
          </div>

          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              <div className={styles.header}>
                <Link to="/">{data?.name}</Link>
                <span>{formatPrice(data?.budget)} ₽</span>
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
                      <Tooltip title="Проверенный пользователь">
                        <GoShieldCheck strokeWidth={1} size={16} />
                      </Tooltip>
                    )}
                  </div>
                  <span>{data?.user.type}</span>
                </div>
              </div>
              <div className={styles.actions}>
                <Button type="primary">Подробнее</Button>
                <Button type="default">Сделать предложение</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    [data],
  );

  return card;
};

export default AnnouncementCard;
