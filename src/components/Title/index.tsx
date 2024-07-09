import React from 'react';

import { Typography } from 'antd';

import styles from './Title.module.scss';
import './Title.scss';

interface ITitleProps {
  title: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  afterContent?: string | number;
  classNameAfter?: string;
}

const Title = ({
  title,
  level,
  className,
  classNameAfter,
  afterContent,
  ...restProps
}: ITitleProps) => (
  <Typography.Title level={level} className={`title ${className}`} {...restProps}>
    {title}{' '}
    {afterContent && <span className={`${styles.after} ${classNameAfter}`}>{afterContent}</span>}
  </Typography.Title>
);

export default Title;
