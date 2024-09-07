import React, { forwardRef, useMemo } from 'react';

import { InputProps, InputRef, Input as UIInput } from 'antd';

import styles from './Input.module.scss';
import './Input.scss';

import WrapperWithLabel from '../WrapperWithLabel';

interface IInputProps extends InputProps {
  label?: string;
  labelClassName?: string;
  isRequired?: boolean;
  error?: string;
}

const Input = forwardRef<InputRef, IInputProps>(
  ({ label, error, labelClassName, isRequired = false, type = 'text', ...restProps }, ref) => {
    const field = useMemo(
      () => (
        <UIInput
          // allowClear={{ clearIcon: <IoCloseCircle size={17} /> }}
          type={type}
          ref={ref}
          status={error && 'error'}
          className={`inputWrapper ${styles.input} ${error && styles.error}`}
          {...restProps}
        />
      ),
      [type, ref, error, restProps],
    );

    if (label) {
      return (
        <WrapperWithLabel
          label={label}
          formItem={field}
          value={!!restProps.value}
          name={restProps.name}
          error={error}
          isRequired={isRequired}
        />
      );
    }

    return field;
  },
);

export default Input;
