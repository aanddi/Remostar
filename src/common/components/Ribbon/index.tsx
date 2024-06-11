import React, { useCallback } from 'react';
import { Typography } from 'antd';
import { TbArrowsSort } from 'react-icons/tb';
import { Pagination, Select } from '@components';
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
              <div className={styles.sort}>
                <TbArrowsSort size={20} className={styles.icon} />
                <Select
                  variant="borderless"
                  defaultValue={sortOptions[0]}
                  options={sortOptions}
                  className={styles.selectSort}
                  onChange={(value) => handleSort(value)}
                />
              </div>
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
