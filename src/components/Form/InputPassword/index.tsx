import React, { useMemo } from 'react';

import { Input, InputProps } from 'antd';

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

const InputPassword = ({
  className,
  error,
  isRequired = false,
  label,
  ...restProps
}: IPasswordProps) => {
  const field = useMemo(
    () => <Password className="inputPassword" status={error && 'error'} {...restProps} />,
    [error, restProps],
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
};

export default InputPassword;
