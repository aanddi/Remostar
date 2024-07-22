import React from 'react';

import styles from './ErrorMessage.module.scss';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: IErrorMessageProps) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
