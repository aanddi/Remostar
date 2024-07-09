import React from 'react';

import { Progress, Rate } from '@components';

import styles from './Statistics.module.scss';

import { IStatistics } from '../../type';

interface IStatisticsProps {
  data: IStatistics;
}

const Statistics = ({ data }: IStatisticsProps) => {
  return (
    <div className={styles.statistics}>
      <div className={styles.content}>
        <div className={styles.total}>
          <div className={styles.totalWrapper}>
            <div className={styles.grade}>{data.totalGrade}</div>
            <Rate disabled allowHalf value={data.totalGrade} />
          </div>
          <div className={styles.totalCount}>На основе {data.totalCount} отзывов</div>
        </div>
        <div className={styles.progress}>
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
      </div>
    </div>
  );
};

export default Statistics;
