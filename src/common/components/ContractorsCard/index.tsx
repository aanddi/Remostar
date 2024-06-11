import React, { useMemo } from 'react';
import { Button } from '@components';
import { GoShieldCheck } from 'react-icons/go';
import { Avatar, Tag, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { TbMessage, TbMessageReport } from 'react-icons/tb';
import styles from './ContractorsCard.module.scss';
import IContractorCardProps from './type';

const ContractorsCard = ({ contractor }: IContractorCardProps) => {
  const card = useMemo(
    () => (
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.actions}>
            <div className={styles.actionItem}>
              <FaHeart className={styles.favorite} size={19} />
            </div>
            <Tooltip title="Сообщить о нарушении">
              <div className={styles.actionItem}>
                <TbMessageReport size={22} />
              </div>
            </Tooltip>
          </div>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Avatar size={110} src="src/assets/Contractors/default-avatar.png" />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                <div className={styles.name}>
                  <Link to="/">{contractor?.name}</Link>
                  {contractor?.verify && (
                    <Tooltip title="Проверенный подрядчик">
                      <GoShieldCheck strokeWidth={1} size={16} />
                    </Tooltip>
                  )}
                </div>
                <div className={styles.reviews}>
                  <div className={styles.reviewsItem}>
                    <FaStar size={18} className={styles.star} />
                    {contractor?.reviews.starCount}
                  </div>
                  <div className={styles.reviewsItem}>
                    <TbMessage size={18} className={styles.comment} />
                    <Link to="/" className={styles.commentLink}>
                      {contractor?.reviews.commentCount} отзывов
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.infoScoupe}>
                <div className={styles.infoItem}>
                  <LuMapPin size={15} />
                  {contractor?.city}
                </div>
                <div className={styles.infoItem}>
                  <MdOutlineBusinessCenter size={15} />
                  {contractor?.contartorType}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.desc}>{contractor?.desc}</div>
          <div className={styles.tags}>
            {contractor?.tags.map((elem) => {
              return (
                <Tag key={elem.id} bordered={false} color="blue">
                  {elem.name}
                </Tag>
              );
            })}
          </div>
          <div className={styles.services}>
            <Typography.Title level={5} className={styles.title}>
              Услуги <span>{contractor?.services.count}</span>
            </Typography.Title>
            {contractor?.services.list.map((service) => {
              return (
                <div key={service.id} className={styles.service}>
                  <div className={styles.name}>{service.name}</div>
                  <div className={styles.salary}>от {service.salary} ₽ / м2</div>
                </div>
              );
            })}
            <Link to="/" className={styles.servicesMore}>
              Еще услуги
            </Link>
          </div>
          <div className={styles.footer}>
            <Button type="primary">Подробнее</Button>
            <Button type="default">Предложить заказ</Button>
          </div>
        </div>
      </div>
    ),
    [contractor],
  );

  return card;
};

export default ContractorsCard;
