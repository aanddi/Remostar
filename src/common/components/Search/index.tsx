import React, { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input } from '@components';

import { Filter, Map } from '@common/icon';

import { useAppSelector } from '@store/hooks';

import { Badge, Tooltip, Typography } from 'antd';

import { FiSearch } from 'react-icons/fi';

import styles from './Seacr.module.scss';
import { ISearch, ISearchProps } from './type';

const Search = ({ title, onSearch, onOpenFilter, totalCountFilter }: ISearchProps) => {
  const { city } = useAppSelector((state) => state.citys);

  const { control, getValues, setValue } = useForm<ISearch>();

  useEffect(() => {
    setValue('searchCity', city);
  }, [city, setValue]);

  const handleFilter = useCallback(() => {
    onOpenFilter?.();
  }, [onOpenFilter]);

  const handleSearch = useCallback(() => {
    onSearch(getValues());
  }, [getValues, onSearch]);

  return (
    <section className={styles.search}>
      <div className={styles.wrapper}>
        <Typography.Title className={styles.title}>{title}</Typography.Title>
        <form className={styles.form}>
          <div className={styles.body}>
            <Controller
              name="searchField"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Поиск"
                  size="large"
                  prefix={<FiSearch className={styles.iconSearch} size={18} />}
                  className={styles.field}
                  {...field}
                />
              )}
            />
            <div className={styles.delimiter} />
            <Controller
              name="searchCity"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Город"
                  size="large"
                  prefix={<Map className={styles.iconSearch} size={18} />}
                  className={styles.field}
                  {...field}
                />
              )}
            />
          </div>
          {onOpenFilter && (
            <Badge count={totalCountFilter}>
              <Tooltip title="Фильтр">
                <Button
                  type="default"
                  size="large"
                  className={styles.filter}
                  onClick={handleFilter}
                >
                  <Filter size={20} />
                </Button>
              </Tooltip>
            </Badge>
          )}
          <Button type="primary" size="large" onClick={handleSearch} className={styles.submit}>
            Найти
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Search;
