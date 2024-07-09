import React from 'react';

import { PaginationProps, Pagination as UIPagination } from 'antd';

import './Pagination.scss';

interface IPaginationProps extends PaginationProps {
  clasName?: string;
}

const Pagination = ({ className, ...restProps }: IPaginationProps) => (
  <UIPagination className={`pagination ${className}`} {...restProps} />
);

export default Pagination;
