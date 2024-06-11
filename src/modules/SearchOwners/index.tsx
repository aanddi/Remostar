import { Search, Ribbon, AnnouncementCard } from '@common';
import React, { useCallback } from 'react';
import { categories, sortOptions } from './constans';
import responseGetAnnouncements from './mock';
import styles from './SearchOwners.module.scss';

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

  const handleSorting = useCallback((value: string) => {
    console.log(value);
  }, []);

  return (
    <div>
      <div className="container">
        <Search
          title="Поиск собственника"
          onOpenFilter={handleOpenFilter}
          onSearch={handleSearch}
          onSearchCategories={handleSearchCategories}
          categories={categories}
        />
      </div>
      <Ribbon
        pagination
        sortOptions={sortOptions}
        onSorting={handleSorting}
        totalPage={responseGetAnnouncements.totalPage}
        listCount={responseGetAnnouncements.countItems}
        classNameList={styles.listAnnouncements}
      >
        {responseGetAnnouncements.announcements.map((announcement) => {
          return <AnnouncementCard data={announcement} />;
        })}
      </Ribbon>
    </div>
  );
};

export default SearchOwners;
