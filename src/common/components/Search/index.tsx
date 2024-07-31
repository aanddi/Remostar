import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input } from '@components';

import { Filter } from '@common/icon';

import { Tooltip, Typography } from 'antd';

import { FiSearch } from 'react-icons/fi';

import styles from './Seacr.module.scss';
import { ISearchProps } from './type';

const Search = ({
  title,
  onSearch,
  onSearchCategories,
  onOpenFilter,
  categories,
}: ISearchProps) => {
  const { control, getValues } = useForm({
    defaultValues: {
      searchField: '',
    },
  });

  const [activeCategories, setActiveCategories] = useState('');

  const handleFilter = useCallback(() => {
    onOpenFilter?.();
  }, [onOpenFilter]);

  const handleSearch = useCallback(() => {
    onSearch(getValues());
  }, [getValues, onSearch]);

  const handleCategories = useCallback(
    (categorie: string) => {
      setActiveCategories(categorie);
      onSearchCategories?.(categorie);
    },
    [onSearchCategories],
  );

  return (
    <section className={styles.search}>
      <div className={styles.wrapper}>
        <Typography.Title className={styles.title}>{title}</Typography.Title>
        <form className={styles.form}>
          <Controller
            name="searchField"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Поиск"
                size="large"
                allowClear
                prefix={<FiSearch className={styles.iconSearch} size={18} />}
                {...field}
              />
            )}
          />
          {onOpenFilter && (
            <Tooltip title="Фильтр">
              <Button type="default" size="large" className={styles.filter} onClick={handleFilter}>
                <Filter size={20} />
              </Button>
            </Tooltip>
          )}
          <Button type="primary" size="large" onClick={handleSearch}>
            Найти
          </Button>
        </form>
        {categories && (
          <div className={styles.categories}>
            {categories.map((elem) => {
              return (
                <Button
                  key={elem.id}
                  className={`${styles.item} ${activeCategories === elem.name && styles.active}`}
                  onClick={() => handleCategories(elem.name)}
                >
                  <span>{elem.name}</span>
                  {elem.count && <span>{elem.count}</span>}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
