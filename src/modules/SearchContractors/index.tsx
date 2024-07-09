import React, { useCallback } from 'react';

import { ContractorsCard, Ribbon, Search } from '@common';

import PopularContractors from './components/PopularContractors';

import styles from './SearchContractors.module.scss';
import { categories, sortOptions } from './constans';
import responseGetContarctors from './mock';

const SearchContractors = () => {
  const handleOpenFilter = useCallback(() => {
    console.log('modal is open');
  }, []);

  const handleSearch = useCallback((data: any) => {
    console.log(data);
  }, []);

  const handleSearchCategories = useCallback((data: any) => {
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
          onOpenFilter={handleOpenFilter}
          onSearchCategories={handleSearchCategories}
          categories={categories}
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
    </div>
  );
};

export default SearchContractors;
