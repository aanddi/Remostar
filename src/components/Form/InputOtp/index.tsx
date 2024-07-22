import React from 'react';

import { Input } from 'antd';

import './InputOtp.scss';

const { OTP } = Input;

interface IOtpProps {
  length: number;
  className?: string;
}

const InputOtp = ({ className, length, ...restProps }: IOtpProps) => {
  return (
    <div className="inputOtp">
      <OTP length={length} {...restProps} />
    </div>
  );
};

export default InputOtp;
