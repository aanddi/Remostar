import React, { useCallback } from 'react';

import { Pagination } from '@components';

import { ArrowsSort } from '@common/icon';

import { Select, Typography } from 'antd';

import styles from './Ribbon.module.scss';
import IribbonProps from './type';

const Ribbon = ({
  children,
  listCount,
  classNameList,
  pagination,
  totalPage,
  sortOptions,
  onSorting,
}: IribbonProps) => {
  const handleSort = useCallback(
    (value: string) => {
      onSorting?.(value);
    },
    [onSorting],
  );

  return (
    <section className={styles.ribbon}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Typography.Title level={5} className={styles.count}>
              {listCount} найдено
            </Typography.Title>
            {sortOptions && (
              <Select
                defaultValue={sortOptions[0]}
                options={sortOptions}
                className={styles.selectSort}
                suffixIcon={<ArrowsSort size={20} className={styles.icon} />}
                onChange={(value) => handleSort(value as unknown as string)}
              />
            )}
          </div>
          <div className={`${classNameList}`}>{children}</div>
        </div>
        {pagination && <Pagination defaultCurrent={1} total={totalPage} />}
      </div>
    </section>
  );
};

export default Ribbon;
