import React from 'react';

import { Typography } from 'antd';

import styles from './ErrorMessage.module.scss';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: IErrorMessageProps) => {
  return (
    <Typography.Text type="danger" className={styles.error}>
      {message}
    </Typography.Text>
  );
};

export default ErrorMessage;
