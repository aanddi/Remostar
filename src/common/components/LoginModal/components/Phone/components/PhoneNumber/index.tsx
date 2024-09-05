import React, { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, InputPhone } from '@components';
import ErrorMessage from '@components/Form/ErrorMessage';

import { IOtpGenerate, IOtpGenerateResponse } from '@common/api/services/auth/types/otp.type';
import { useOtpGenerate } from '@common/components/LoginModal/model';

import styles from './PhoneNumber.module.scss';

interface IPhoneNumberProps {
  setResponseGenerateOtp: Dispatch<SetStateAction<IOtpGenerateResponse | null>>;
}

const PhoneNumber = ({ setResponseGenerateOtp }: IPhoneNumberProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IOtpGenerate>({
    mode: 'onSubmit',
  });

  const { mutate: generateOtp, isPending, error } = useOtpGenerate(setResponseGenerateOtp);

  const handlePhoneNumber = (data: IOtpGenerate) => {
    generateOtp(data);
  };

  return (
    <form onSubmit={handleSubmit(handlePhoneNumber)} className={styles.form}>
      <Controller
        name="phone"
        control={control}
        rules={{
          validate: {
            minLength: (value) => String(value).length > 17,
          },
        }}
        render={({ field }) => <InputPhone label="Номер телефона" inputField={field} />}
      />
      <Button disabled={!isValid} size="large" type="primary" htmlType="submit" loading={isPending}>
        Продолжить
      </Button>
      <ErrorMessage message={error?.response?.data?.message} />
    </form>
  );
};

export default PhoneNumber;
