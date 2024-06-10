import { ContractorsCard, Ribbon, Search } from '@common';

import React, { useCallback } from 'react';
import styles from './SearchContractors.module.scss';
import responseGetContarctors from './mock';
import PopularContractors from './components/PopularContractors';
import { categories, sortOptions } from './constans';

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
        totalPage={responseGetContarctors.totalPage}
        listCount={responseGetContarctors.contartorsCount}
        classNameList={styles.listConractors}
        sortOptions={sortOptions}
        onSort={handleSort}
      >
        <div className={styles.contractors}>
          {responseGetContarctors.contartors.map((contartor) => {
            return <ContractorsCard key={contartor.id} contractor={contartor} />;
          })}
        </div>
        <PopularContractors contractors={responseGetContarctors.popularContartors} />
      </Ribbon>
    </div>
  );
};

export default SearchContractors;
