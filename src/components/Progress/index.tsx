import React from 'react';

import { ProgressProps, Progress as UIProgress } from 'antd';

import styles from './Progress.module.scss';
import './Progress.scss';

interface IProgressProps extends ProgressProps {
  label?: string;
  className?: string;
}

const Progress = ({ label, className, ...restProps }: IProgressProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <div className={styles.label}>{label}</div>}
      <UIProgress className={`progress ${className}`} {...restProps} />
    </div>
  );
};

export default Progress;
