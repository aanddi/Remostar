import React from 'react';

import { Tooltip } from 'antd';

import { GoShieldCheck } from 'react-icons/go';

import styles from './Verify.module.scss';

interface ITitleProps {
  size?: number;
  strokeWidth?: number;
  textTooltip?: string;
  className?: string;
}

const Verify = ({
  size = 25,
  strokeWidth = 1,
  textTooltip = 'Проверенный подрядчик',
  className,
}: ITitleProps) => (
  <Tooltip title={textTooltip}>
    <GoShieldCheck
      className={`${styles.verify} ${className}`}
      strokeWidth={strokeWidth}
      size={size}
    />
  </Tooltip>
);

export default Verify;
