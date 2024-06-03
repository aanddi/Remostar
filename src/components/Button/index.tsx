import React from 'react';

import { Button as UIButton, ButtonProps } from 'antd';

import styles from './Button.module.scss';
import './Button.scss';

const Button = ({
  children,
  type,
  className,
  icon,
  disabled = false,
  ...restProps
}: ButtonProps) => (
  <UIButton
    type={type}
    icon={icon && icon}
    disabled={disabled}
    className={`btn ${styles.btn} ${type && `${styles[type]} btn-${type}`}  ${className}`}
    {...restProps}
  >
    {children}
  </UIButton>
);

export default Button;
