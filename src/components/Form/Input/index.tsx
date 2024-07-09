import React, { forwardRef, useMemo } from 'react';

import { InputProps, InputRef, Input as UIInput } from 'antd';

import styles from './Input.module.scss';
import './Input.scss';

interface IInputProps extends InputProps {
  label?: string;
  labelClassName?: string;
  isRequired?: boolean;
}

const Input = forwardRef<InputRef, IInputProps>(
  ({ label, labelClassName, isRequired, type = 'text', ...restProps }, ref) => {
    const field = useMemo(
      () => (
        <UIInput type={type} ref={ref} className={`inputWrapper ${styles.input}`} {...restProps} />
      ),
      [type, ref, restProps],
    );

    if (label) {
      return field; // заглушка
    }

    return field;
  },
);

export default Input;
