import React from 'react';

import { Image, Progress, Rate } from '@components';

import grayBg from '@assets/Contractors/Reviews/bg_gray.png';

import { Image as AntdImage, Avatar } from 'antd';

import styles from './Review.module.scss';
import { IMAGES_PREVIEW, IMAGE_SIZE } from './constans';

import { IReviewCard } from '../../type';

const { PreviewGroup } = AntdImage;

const Card = ({ data }: { data: IReviewCard }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.content}>
            <div className={styles.user}>
              <Avatar>{data.name[0]}</Avatar>
              <span className={styles.name}>{data.name}</span>
            </div>
            <span className={styles.date}>{data.date}</span>
          </div>
          <div className={styles.type}>{data.type}</div>
        </div>
        <div className={styles.body}>
          <Rate disabled allowHalf value={data.totalGrade} />
          <div className={styles.texts}>
            <div className={styles.textItem}>
              <div className={styles.textTitle}>Достоинства</div>
              <p>{data.dignityText}</p>
            </div>
            <div className={styles.textItem}>
              <div className={styles.textTitle}>Недостатки</div>
              <p>{data.flaws}</p>
            </div>
            <div className={styles.textItem}>
              <div className={styles.textTitle}>Комментарий</div>
              <p>{data.reviewText}</p>
            </div>
          </div>
        </div>
        <div className={styles.gradeGroupe}>
          <Progress
            label="Стоимость"
            className={styles.progressItem}
            percent={(data.priceGrade / 5) * 100}
            format={() => data.priceGrade}
          />
          <Progress
            label="Качество работы"
            percent={(data.qualityGrade / 5) * 100}
            format={() => data.qualityGrade}
          />
          <Progress
            label="Качество материалов"
            percent={(data.materialsGrade / 5) * 100}
            format={() => data.materialsGrade}
          />
          <Progress
            label="Профессионализм и опыт"
            percent={(data.experienceGrade / 5) * 100}
            format={() => data.experienceGrade}
          />
          <Progress
            label="Соблюдение сроков"
            percent={(data.deadlinesGrade / 5) * 100}
            format={() => data.deadlinesGrade}
          />
          <Progress
            label="Коммуникация и отзывчивость"
            percent={(data.communicationGrade / 5) * 100}
            format={() => data.communicationGrade}
          />
        </div>
        {data.images && (
          <div className={styles.gallery}>
            <PreviewGroup items={data.images}>
              {data.images.slice(0, IMAGES_PREVIEW).map((image) => {
                return <Image width={IMAGE_SIZE} height={IMAGE_SIZE} src={image} />; // TODO: key ??
              })}
              {data.images.length > IMAGES_PREVIEW && (
                <div className={styles.restImages}>
                  <Image width={IMAGE_SIZE} height={IMAGE_SIZE} src={grayBg} />
                  <div className={styles.restNumber}>+{data.images.length - IMAGES_PREVIEW}</div>
                </div>
              )}
            </PreviewGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
