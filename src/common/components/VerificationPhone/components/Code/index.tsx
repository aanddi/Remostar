import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, InputOtp } from '@components';
import ErrorMessage from '@components/Form/ErrorMessage';

import { ILoginPhone } from '@common/api/services/auth/types/login.type';
import { IOtpGenerateResponse, IOtpVerification } from '@common/api/services/auth/types/otp.type';
import TimerButton from '@common/components/TimerButton';

import { IoIosArrowBack } from 'react-icons/io';

import styles from './Code.module.scss';

import { useOtpGenerate, useOtpVerification } from '../../model';

interface ICode {
  typeVerification: 'register' | 'login';
  verificationState: IOtpGenerateResponse;
  setVerificationState: Dispatch<SetStateAction<IOtpGenerateResponse | null>>;
  handleVerification: (data: ILoginPhone) => void;
  classNameBackButton?: string;
}

const Code = ({
  verificationState,
  setVerificationState,
  handleVerification,
  typeVerification,
  classNameBackButton,
}: ICode) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IOtpVerification>({
    mode: 'onChange',
    defaultValues: {
      code: '47621',
    },
  });

  const { mutate: generateOtp } = useOtpGenerate(setVerificationState, typeVerification);

  const {
    mutate: otpVerification,
    error,
    isPending,
  } = useOtpVerification(handleVerification, setVerificationState);

  const handleResendTimer = useCallback(() => {
    generateOtp({ phone: verificationState.phone });
  }, [generateOtp, verificationState]);

  const handleVerificationCode = (data: IOtpVerification) => {
    const newData = {
      code: data.code,
      phone: verificationState.phone,
      sessionSmsId: verificationState.sessionSmsId,
    };
    otpVerification(newData);
  };

  return (
    <form onSubmit={handleSubmit(handleVerificationCode)} className={styles.form}>
      <Button
        className={`${styles.back} ${classNameBackButton}`}
        onClick={() => setVerificationState(null)}
        icon={<IoIosArrowBack size={20} />}
      />
      <div className={styles.textPhone}>
        Мы отправили код на номер телефона <span>{verificationState.phone}</span>
      </div>
      <Controller
        name="code"
        control={control}
        rules={{ required: 'Введите номер телефона' }}
        render={({ field: { ...restField } }) => <InputOtp length={5} {...restField} />}
      />
      <Button disabled={!isValid} size="large" type="primary" htmlType="submit" loading={isPending}>
        Продолжить
      </Button>
      <TimerButton timerLimit={60} handleResend={handleResendTimer} />
      <ErrorMessage message={error?.response?.data?.message} />
    </form>
  );
};

export default Code;
