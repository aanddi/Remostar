import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import FilterParams from '@modules/SearchOwners/types';

import { Button, InputNumber, Modal, Title } from '@components';

import styles from './Filter.module.scss';
import tags from './constans';
import IFormFilters from './types';

const FilterModal = ({ ...restProps }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location]);

  const [totalCountFilter, setTotalCountFilter] = useState<number>(0);

  const [filters, setFilters] = useState<IFormFilters>({
    minPrice: undefined,
    maxPrice: undefined,
    minSquare: undefined,
    maxSquare: undefined,
    countRooms: undefined,
    tags: [],
  });

  useEffect(() => {
    const queryTags = queryParams.get(FilterParams.TAGS);
    const queryCountRooms = queryParams.get(FilterParams.COUNTROOMS);
    const queryMinPrice = queryParams.get(FilterParams.MINPRICE);
    const queryMaxPrice = queryParams.get(FilterParams.MAXPRICE);
    const queryMinSquare = queryParams.get(FilterParams.MINSQUARE);
    const queryMaxSquare = queryParams.get(FilterParams.MAXSQUARE);

    setFilters({
      minPrice: queryMaxPrice ? Number(queryMaxPrice) : undefined,
      maxPrice: queryMinPrice ? Number(queryMinPrice) : undefined,
      minSquare: queryMinSquare ? Number(queryMinSquare) : undefined,
      maxSquare: queryMaxSquare ? Number(queryMaxSquare) : undefined,
      countRooms: queryCountRooms ? Number(queryCountRooms) : undefined,
      tags: queryTags?.split(',') ?? [],
    });
  }, [location, queryParams]);

  useEffect(() => {
    const countActiveFilters = () => {
      const filterValues = Object.values(filters);

      const sortedFilter = filterValues.filter(
        (value) => value !== undefined && value !== null && Array.isArray(value) !== true,
      );

      return sortedFilter.length + filters.tags.length;
    };

    setTotalCountFilter(countActiveFilters());
  }, [filters]);

  const handleFilterChange = (key: keyof IFormFilters, value: number | undefined) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleTagsChange = (value: string, isActive: boolean) => {
    setFilters((prev) => ({
      ...prev,
      tags: isActive ? prev.tags.filter((tag) => tag !== value) : [...prev.tags, value],
    }));
  };

  const handleSubmitFilters = () => {
    if (filters.maxPrice) queryParams.set(FilterParams.MAXPRICE, filters.maxPrice.toString());
    if (filters.minPrice) queryParams.set(FilterParams.MINPRICE, filters.minPrice.toString());
    if (filters.maxSquare) queryParams.set(FilterParams.MAXSQUARE, filters.maxSquare.toString());
    if (filters.minSquare) queryParams.set(FilterParams.MINSQUARE, filters.minSquare.toString());
    if (filters.countRooms) queryParams.set(FilterParams.COUNTROOMS, filters.countRooms.toString());
    if (filters.tags.length > 0) queryParams.set(FilterParams.TAGS, filters.tags.join(','));

    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });

    restProps.onCancel();
  };

  const handleResetFilters = () => {
    setFilters({
      minPrice: undefined,
      maxPrice: undefined,
      minSquare: undefined,
      maxSquare: undefined,
      countRooms: undefined,
      tags: [],
    });

    queryParams.delete(FilterParams.MAXPRICE);
    queryParams.delete(FilterParams.MINPRICE);
    queryParams.delete(FilterParams.MAXSQUARE);
    queryParams.delete(FilterParams.MINSQUARE);
    queryParams.delete(FilterParams.COUNTROOMS);
    queryParams.delete(FilterParams.TAGS);

    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  return (
    <Modal
      className={styles.modal}
      okText="Сохранить"
      handleClose={restProps.onCancel}
      footer={false}
      {...restProps}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Title title="Фильтры" level={3} className={styles.title} />
          <span className={styles.count}>{totalCountFilter}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.block}>
            <Title title="Стоимость в ₽" level={5} />
            <div className={styles.blockInput}>
              <InputNumber
                label="от"
                min={0}
                value={filters.minPrice}
                onChange={(value) => handleFilterChange(FilterParams.MINPRICE, value as number)}
              />

              <InputNumber
                label="до"
                min={0}
                value={filters.maxPrice}
                onChange={(value) => handleFilterChange(FilterParams.MAXPRICE, value as number)}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Title title="Площадь в м²" level={5} />
            <div className={styles.blockInput}>
              <InputNumber
                label="от"
                min={0}
                value={filters.minSquare}
                onChange={(value) => handleFilterChange(FilterParams.MINSQUARE, value as number)}
              />
              <InputNumber
                label="до"
                min={0}
                value={filters.maxSquare}
                onChange={(value) => handleFilterChange(FilterParams.MAXSQUARE, value as number)}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Title title="Кол-во комнат" level={5} />
            <div className={styles.blockInput}>
              <InputNumber
                label="Количество"
                min={0}
                value={filters.countRooms}
                onChange={(value) => handleFilterChange(FilterParams.COUNTROOMS, value as number)}
              />
            </div>
          </div>
          <div className={styles.block}>
            <Title title="Теги" level={5} />
            <div className={styles.blockContent}>
              {tags.map(({ value, key }) => {
                const isActive = filters.tags.includes(value);
                return (
                  <Button
                    key={key}
                    shape="round"
                    className={`${isActive && styles.btnActive} ${styles.btnFilter}`}
                    onClick={() => handleTagsChange(value, isActive)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Button type="primary" size="large" onClick={handleSubmitFilters}>
            Найти
          </Button>
          <Button type="text" size="large" onClick={handleResetFilters}>
            Сбросить фильтры
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
