import React from 'react';

import { SegmentedProps, Segmented as UISegmented } from 'antd';

import './Segmented.scss';

interface ISegmentedProps extends SegmentedProps {
  className?: string;
}

const Segmented = ({ className, ...restProps }: ISegmentedProps) => {
  return <UISegmented className={`segmented ${className}`} {...restProps} />;
};

export default Segmented;
