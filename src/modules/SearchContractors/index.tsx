import { ContractorsCard, Ribbon, Search } from '@common';
import React, { useCallback } from 'react';
import categoriesMock from './mock';

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

  return (
    <div>
      <div className="container">
        <Search
          title="Поиск подрядчиков"
          onSearch={handleSearch}
          onOpenFilter={handleOpenFilter}
          onSearchCategories={handleSearchCategories}
          categories={categoriesMock}
        />
      </div>
      <Ribbon fullCount={1}>
        <ContractorsCard />
      </Ribbon>
    </div>
  );
};

export default SearchContractors;
