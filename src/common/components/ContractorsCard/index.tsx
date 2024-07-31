import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@components';

import { Verify } from '@common';
import { Briefcase, Heart, Map, Message, MessageReport, Star } from '@common/icon';

import { Avatar, Tag, Tooltip, Typography } from 'antd';

import styles from './ContractorsCard.module.scss';
import IContractorCardProps from './type';

const ContractorsCard = ({ data }: IContractorCardProps) => {
  const navigate = useNavigate();
  const card = useMemo(
    () => (
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.actions}>
            <div className={styles.actionItem}>
              <Heart className={styles.favorite} size={19} />
            </div>
            <Tooltip title="Сообщить о нарушении">
              <div className={styles.actionItem}>
                <MessageReport size={22} />
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
                  <Link to={`/contractor/${data?.id}`}>{data?.name}</Link>
                  {data?.verify && <Verify strokeWidth={1} size={16} />}
                </div>
                <div className={styles.reviews}>
                  <div className={styles.reviewsItem}>
                    <Star size={18} className={styles.star} />
                    {data?.reviews.starCount}
                  </div>
                  <div className={styles.reviewsItem}>
                    <Message size={18} className={styles.comment} />
                    <Link
                      to={`/contractor/${data?.id}/?view=reviews`}
                      className={styles.commentLink}
                    >
                      {data?.reviews.commentCount} отзывов
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.infoScoupe}>
                <div className={styles.infoItem}>
                  <Map size={15} />
                  {data?.city}
                </div>
                <div className={styles.infoItem}>
                  <Briefcase size={15} />
                  {data?.contartorType}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.desc}>{data?.desc}</div>
          <div className={styles.tags}>
            {data?.tags.map((elem) => {
              return (
                <Tag key={elem.id} bordered={false} color="blue">
                  {elem.name}
                </Tag>
              );
            })}
          </div>
          <div className={styles.services}>
            <Typography.Title level={5} className={styles.title}>
              Услуги <span>{data?.services.count}</span>
            </Typography.Title>
            {data?.services.list.map((service) => {
              return (
                <div key={service.id} className={styles.service}>
                  <div className={styles.name}>{service.name}</div>
                  <div className={styles.salary}>от {service.salary} ₽ / м2</div>
                </div>
              );
            })}
            <Link to={`/contractor/${data?.id}/?view=services`} className={styles.servicesMore}>
              Еще услуги
            </Link>
          </div>
          <div className={styles.footer}>
            <Button type="primary" onClick={() => navigate(`/contractor/${data?.id}`)}>
              Подробнее
            </Button>
            <Button type="default">Предложить заказ</Button>
          </div>
        </div>
      </div>
    ),
    [data, navigate],
  );

  return card;
};

export default ContractorsCard;
