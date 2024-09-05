import React, { forwardRef, useMemo } from 'react';

import { Input, InputProps, InputRef } from 'antd';

import './InputPassword.scss';

import WrapperWithLabel from '../WrapperWithLabel';

const { Password } = Input;

interface IPasswordProps extends InputProps {
  className?: string;
  label?: string;
  labelClassName?: string;
  isRequired?: boolean;
  error?: string;
}

const InputPassword = forwardRef<InputRef, IPasswordProps>(
  ({ className, error, isRequired = false, label, ...restProps }, ref) => {
    const field = useMemo(
      () => (
        <Password
          ref={ref}
          className={`inputPassword ${className}`}
          status={error ? 'error' : undefined}
          {...restProps}
        />
      ),
      [ref, className, error, restProps],
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

export default InputPassword;
