import { Search, Ribbon, AnnouncementCard } from '@common';
import React, { useCallback } from 'react';
import categoriesMock from './mock';

const SearchOwners = () => {
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
          title="Поиск собственника"
          onOpenFilter={handleOpenFilter}
          onSearch={handleSearch}
          onSearchCategories={handleSearchCategories}
          categories={categoriesMock}
        />
      </div>
      <Ribbon listCount={1}>
        <AnnouncementCard />
      </Ribbon>
    </div>
  );
};

export default SearchOwners;
