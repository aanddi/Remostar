import React from 'react';

import { RateProps, Rate as UIRate } from 'antd';

import styles from './Rate.module.scss';
import './Rate.scss';

interface IRateProps extends RateProps {
  className?: string;
}

const Rate = ({ className, ...restProps }: IRateProps) => {
  return <UIRate className={`rate ${styles.rate} ${className}`} {...restProps} />;
};

export default Rate;
