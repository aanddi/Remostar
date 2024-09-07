import React, { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, InputPhone, Title } from '@components';
import ErrorMessage from '@components/Form/ErrorMessage';

import { IOtpGenerate, IOtpGenerateResponse } from '@common/api/services/auth/types/otp.type';

import styles from './Phone.module.scss';

import { useOtpGenerate } from '../../model';

interface IPhone {
  typeVerification: 'register' | 'login';
  setVerificationState: Dispatch<SetStateAction<IOtpGenerateResponse | null>>;
  titlePhone?: string;
}

const Phone = ({ setVerificationState, typeVerification, titlePhone }: IPhone) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IOtpGenerate>({
    mode: 'onSubmit',
  });

  const {
    mutate: generateOtp,
    isPending,
    error,
  } = useOtpGenerate(setVerificationState, typeVerification);

  const handlePhoneNumber = (data: IOtpGenerate) => {
    generateOtp(data);
  };

  return (
    <div className={styles.phone}>
      {titlePhone && <Title title={titlePhone} level={4} className={styles.title} />}
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
        <Button
          disabled={!isValid}
          size="large"
          type="primary"
          htmlType="submit"
          loading={isPending}
        >
          Продолжить
        </Button>
        <ErrorMessage message={error?.response?.data?.message} />
      </form>
    </div>
  );
};

export default Phone;
