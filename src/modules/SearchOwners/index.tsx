import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AnnouncementCard, Ribbon, Search } from '@common/components';
import { useModal } from '@common/hooks';

import FilterModal from './components/modal/Filter';

import styles from './SearchOwners.module.scss';
import sortOptions from './constans';
import responseGetAnnouncements from './mock';
import FilterParams from './types';

const SearchOwners = () => {
  const location = useLocation();

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

  const [totalCountFilter, setTotalCountFilter] = useState<number>(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const queryTags = queryParams.get(FilterParams.TAGS);
    const queryCountRooms = queryParams.get(FilterParams.COUNTROOMS);
    const queryMinPrice = queryParams.get(FilterParams.MINPRICE);
    const queryMaxPrice = queryParams.get(FilterParams.MAXPRICE);
    const queryMinSquare = queryParams.get(FilterParams.MINSQUARE);
    const queryMaxSquare = queryParams.get(FilterParams.MAXSQUARE);

    const total =
      (queryTags?.split(',')?.length ?? 0) +
      (queryCountRooms?.split(',')?.length ?? 0) +
      (queryMinPrice?.split(',')?.length ?? 0) +
      (queryMaxPrice?.split(',')?.length ?? 0) +
      (queryMinSquare?.split(',')?.length ?? 0) +
      (queryMaxSquare?.split(',')?.length ?? 0);

    setTotalCountFilter(total);
  }, [location, isOpenModal]);

  const handleSearch = useCallback((data: any) => {
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
          onOpenFilter={handleOpenModal}
          onSearch={handleSearch}
          totalCountFilter={totalCountFilter}
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
          return <AnnouncementCard key={announcement.id} data={announcement} />;
        })}
      </Ribbon>
      <FilterModal open={isOpenModal} onCancel={handleCloseModal} />
    </div>
  );
};

export default SearchOwners;
