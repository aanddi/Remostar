import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ContractorsCard, Ribbon, Search } from '@common';
import useModal from '@common/hooks/useModal';

import PopularContractors from './components/PopularContractors';
import FilterModal from './components/modal/Filter';

import styles from './SearchContractors.module.scss';
import { sortOptions } from './constans';
import responseGetContarctors from './mock';
import FilterParams from './type';

const SearchContractors = () => {
  const location = useLocation();

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

  const [totalCountFilter, setTotalCountFilter] = useState<number>(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const queryTags = queryParams.get(FilterParams.TAGS);
    const querySubjects = queryParams.get(FilterParams.SUBJECTS);
    const queryAbout = queryParams.get(FilterParams.ABOUT);

    const total =
      (queryTags?.split(',')?.length ?? 0) +
      (querySubjects?.split(',')?.length ?? 0) +
      (queryAbout?.split(',')?.length ?? 0);

    setTotalCountFilter(total);
  }, [location, isOpenModal]);

  const handleSearch = useCallback((data: any) => {
    console.log(data);
  }, []);

  const handleSort = useCallback((value: string) => {
    console.log(value);
  }, []);

  return (
    <div className={styles.contartors}>
      <div className="container">
        <Search
          title="Поиск подрядчиков"
          onSearch={handleSearch}
          onOpenFilter={handleOpenModal}
          totalCountFilter={totalCountFilter}
        />
      </div>
      <Ribbon
        pagination
        sortOptions={sortOptions}
        onSorting={handleSort}
        totalPage={responseGetContarctors.totalPage}
        listCount={responseGetContarctors.countItems}
        classNameList={styles.listConractors}
      >
        <div className={styles.contractors}>
          {responseGetContarctors.contartors.map((contartor) => {
            return <ContractorsCard key={contartor.id} data={contartor} />;
          })}
        </div>
        <PopularContractors contractors={responseGetContarctors.popularContartors} />
      </Ribbon>
      <FilterModal open={isOpenModal} onCancel={handleCloseModal} />
    </div>
  );
};

export default SearchContractors;
