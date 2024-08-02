import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Modal, Title } from '@components';

import styles from './Filter.module.scss';
import { aboutContactor, subjects, tags } from './constans';

import FilterParams from '../../../type';

const FilterModal = ({ ...restProps }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location]);

  const [totalCountFilter, setTotalCountFilter] = useState<number>(0);

  const [subjectsFilter, setSubjectsFilter] = useState<string[]>([]);
  const [aboutFilter, setAboutFilter] = useState<string[]>([]);
  const [tagsFilter, setTagsFilter] = useState<string[]>([]);

  useEffect(() => {
    const queryTags = queryParams.get(FilterParams.TAGS);
    const querySubjects = queryParams.get(FilterParams.SUBJECTS);
    const queryAbout = queryParams.get(FilterParams.ABOUT);

    setSubjectsFilter(querySubjects?.split(',') ?? []);
    setAboutFilter(queryAbout?.split(',') ?? []);
    setTagsFilter(queryTags?.split(',') ?? []);
  }, [location, queryParams]);

  useEffect(() => {
    const totalLength = [...subjectsFilter, ...aboutFilter, ...tagsFilter].length;
    setTotalCountFilter(totalLength);
  }, [subjectsFilter, tagsFilter, aboutFilter]);

  const handleSubjectsFilter = (value: string) => {
    const isActive = subjectsFilter.includes(value);
    if (isActive) setSubjectsFilter(subjectsFilter.filter((item) => item !== value));
    else setSubjectsFilter((prev) => [...prev, value]);
  };

  const handleAboutFilter = (value: string) => {
    const isActive = aboutFilter.includes(value);
    if (isActive) setAboutFilter(aboutFilter.filter((item) => item !== value));
    else setAboutFilter((prev) => [...prev, value]);
  };

  const handleTagsFilter = (value: string) => {
    const isActive = tagsFilter.includes(value);
    if (isActive) setTagsFilter(tagsFilter.filter((item) => item !== value));
    else setTagsFilter((prev) => [...prev, value]);
  };

  const handleSubmitFilters = () => {
    if (subjectsFilter.length > 0) queryParams.set(FilterParams.SUBJECTS, subjectsFilter.join(','));
    if (aboutFilter.length > 0) queryParams.set(FilterParams.ABOUT, aboutFilter.join(','));
    if (tagsFilter.length > 0) queryParams.set(FilterParams.TAGS, tagsFilter.join(','));

    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });

    restProps.onCancel();
  };

  const handleResetFilters = () => {
    setSubjectsFilter([]);
    setAboutFilter([]);
    setTagsFilter([]);

    queryParams.delete(FilterParams.SUBJECTS);
    queryParams.delete(FilterParams.ABOUT);
    queryParams.delete(FilterParams.TAGS);

    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  return (
    <Modal
      centered
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
            <Title title="Субъекты" level={5} />
            <div className={styles.blockContent}>
              {subjects.map(({ value, key }) => {
                const isActive = subjectsFilter.includes(value);
                return (
                  <Button
                    key={key}
                    shape="round"
                    className={`${isActive && styles.btnActive} ${styles.btnFilter}`}
                    onClick={() => handleSubjectsFilter(value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className={styles.block}>
            <Title title="О компании" level={5} />
            <div className={styles.blockContent}>
              {aboutContactor.map(({ value, key }) => {
                const isActive = aboutFilter.includes(value);
                return (
                  <Button
                    key={key}
                    shape="round"
                    className={`${isActive && styles.btnActive} ${styles.btnFilter}`}
                    onClick={() => handleAboutFilter(value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className={styles.block}>
            <Title title="Теги" level={5} />
            <div className={styles.blockContent}>
              {tags.map(({ value, key }) => {
                const isActive = tagsFilter.includes(value);
                return (
                  <Button
                    key={key}
                    shape="round"
                    className={`${isActive && styles.btnActive} ${styles.btnFilter}`}
                    onClick={() => handleTagsFilter(value)}
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
