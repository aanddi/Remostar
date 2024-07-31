import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';

import { ArrowBack } from '@common/icon';

import { BreadcrumbProps, Breadcrumb as UIBreadcrumb } from 'antd';

import styles from './Breadcrumb.module.scss';
import './Breadcrumb.scss';

interface IBreadcrumbProps extends BreadcrumbProps {
  buttonBack?: boolean;
  className?: string;
}

const Breadcrumb = ({ className, buttonBack = true, ...restProps }: IBreadcrumbProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      {buttonBack && (
        <Button icon={<ArrowBack size={15} />} onClick={() => navigate(-1)}>
          Назад
        </Button>
      )}
      <UIBreadcrumb className={`breadcrumb ${className}`} separator="|" {...restProps} />
    </div>
  );
};

export default Breadcrumb;
