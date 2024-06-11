import React from 'react';
import { Pagination as UIPagination, PaginationProps } from 'antd';

import './Pagination.scss';

interface IPaginationProps extends PaginationProps {
  clasName?: string;
}

const Pagination = ({ className, ...restProps }: IPaginationProps) => (
  <UIPagination className={`pagination ${className}`} {...restProps} />
);

export default Pagination;
