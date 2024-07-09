import React from 'react';

import { Tooltip } from 'antd';

import { GoShieldCheck } from 'react-icons/go';

interface ITitleProps {
  size?: number;
  strokeWidth?: number;
  textTooltip?: string;
}

const Verify = ({
  size = 25,
  strokeWidth = 1,
  textTooltip = 'Проверенный подрядчик',
}: ITitleProps) => (
  <Tooltip title={textTooltip}>
    <GoShieldCheck strokeWidth={strokeWidth} size={size} />
  </Tooltip>
);

export default Verify;
