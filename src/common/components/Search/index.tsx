import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input } from '@components';

import { useAppSelector, useModalCitys } from '@common/hooks';
import { Filter, Map } from '@common/icon';

import { Badge, Typography } from 'antd';

import { FiSearch } from 'react-icons/fi';

import styles from './Seacr.module.scss';
import { ISearch, ISearchProps } from './type';

const Search = ({ title, onSearch, onOpenFilter, totalCountFilter }: ISearchProps) => {
  const { control, getValues } = useForm<ISearch>();

  const { handleOpenModal: handleModalCity } = useModalCitys();

  const { city } = useAppSelector((state) => state.citys);

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
          </div>
          <div className={styles.actions}>
            <Button
              type="default"
              size="large"
              icon={<Map size={18} />}
              onClick={() => handleModalCity()}
            >
              {city}
            </Button>
            {onOpenFilter && (
              <Badge count={totalCountFilter} className={styles.filter}>
                <Button type="default" size="large" onClick={handleFilter}>
                  <Filter size={20} />
                </Button>
              </Badge>
            )}
            <Button type="primary" size="large" onClick={handleSearch} className={styles.submit}>
              Найти
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
