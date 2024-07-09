import React from 'react';

import { BreadcrumbProps, Breadcrumb as UIBreadcrumb } from 'antd';

import './Breadcrumb.scss';

interface IBreadcrumbProps extends BreadcrumbProps {
  className?: string;
}

const Breadcrumb = ({ className, ...restProps }: IBreadcrumbProps) => (
  <UIBreadcrumb className={`breadcrumb ${className}`} separator="|" {...restProps} />
);

export default Breadcrumb;
