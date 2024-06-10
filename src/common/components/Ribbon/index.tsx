import React, { useCallback } from 'react';
import { Typography } from 'antd';
import { MdSort } from 'react-icons/md';
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
  onSort,
}: IribbonProps) => {
  const handleSort = useCallback(
    (value: string) => {
      onSort?.(value);
    },
    [onSort],
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
                <MdSort size={20} className={styles.icon} />
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
