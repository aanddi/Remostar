import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, InputOtp } from '@components';
import ErrorMessage from '@components/Form/ErrorMessage';

import { IOtpGenerateResponse, IOtpVerification } from '@common/api/services/auth/types/otp.type';
import {
  useLoginPhone,
  useOtpGenerate,
  useOtpVerification,
} from '@common/components/LoginModal/model';
import TimerButton from '@common/components/TimerButton';
import { useModalLogin } from '@common/hooks';

import { IoIosArrowBack } from 'react-icons/io';

import styles from './Verification.module.scss';

interface IVerificationpProps {
  responseGenerateOtp: IOtpGenerateResponse;
  setVerification: Dispatch<SetStateAction<IOtpGenerateResponse | null>>;
}

const Verification = ({ responseGenerateOtp, setVerification }: IVerificationpProps) => {
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

  const { handleCloseModal } = useModalLogin();

  const { mutate: generateOtp } = useOtpGenerate(setVerification);
  const { mutate: otpVerification, error, isPending } = useOtpVerification();
  const { mutate: loginPhone } = useLoginPhone(handleCloseModal);

  const handleResendTimer = useCallback(() => {
    generateOtp({ phone: responseGenerateOtp.phone });
  }, [generateOtp, responseGenerateOtp]);

  const handleVerification = (data: IOtpVerification) => {
    const newData = {
      code: data.code,
      phone: responseGenerateOtp.phone,
      sessionSmsId: responseGenerateOtp.sessionSmsId,
    };
    otpVerification(newData);

    if (!error) loginPhone({ phone: responseGenerateOtp.phone });
  };

  return (
    <form onSubmit={handleSubmit(handleVerification)} className={styles.form}>
      <Button
        className={styles.back}
        onClick={() => setVerification(null)}
        icon={<IoIosArrowBack size={20} />}
      />
      <div className={styles.textPhone}>
        Мы отправили код на номер телефона <span>{responseGenerateOtp.phone}</span>
      </div>
      <Controller
        name="code"
        control={control}
        rules={{ required: 'Введите номер телефона' }}
        render={({ field: { ...restField } }) => <InputOtp length={5} {...restField} />}
      />
      <Button disabled={!isValid} size="large" type="primary" htmlType="submit" loading={isPending}>
        Войти
      </Button>
      <TimerButton timerLimit={60} handleResend={handleResendTimer} />
      <ErrorMessage message={error?.response?.data?.message} />
    </form>
  );
};

export default Verification;
