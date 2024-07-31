import React from 'react';

import { Verify as VerifyIcon } from '@common/icon';

import { Tooltip } from 'antd';

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
    <VerifyIcon className={`${styles.verify} ${className}`} strokeWidth={strokeWidth} size={size} />
  </Tooltip>
);

export default Verify;
