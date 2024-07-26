import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, InputNumber } from '@components';

import { formatPhone } from '@common/utils/formatter';

import styles from '../Form.module.scss';
import { IPhone } from '../types';

interface IPhoneNumberProps {
  setPhoneNumber: (phone: string) => void;
}

const PhoneNumber = ({ setPhoneNumber }: IPhoneNumberProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IPhone>({
    mode: 'onSubmit',
  });

  const handlePhoneNumber = useCallback(
    (data: IPhone) => {
      console.log(data); // дергаем api и проверяем phone
      setPhoneNumber(data.phone);
    },
    [setPhoneNumber],
  );

  return (
    <form onSubmit={handleSubmit(handlePhoneNumber)} className={styles.form}>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: 'Введите номер телефона',
          validate: {
            minLength: (value) => String(value).length >= 11,
          },
        }}
        render={({ field }) => (
          <InputNumber
            label="Номер телефона"
            error={errors.phone?.message}
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            controls={false}
            formatter={(value) => formatPhone(value as string)}
            parser={(value) => (value ? parseInt(value?.replace(/\D/g, ''), 10) : '')}
            maxLength={18}
            {...field}
          />
        )}
      />
      <Button disabled={!isValid} size="large" type="primary" htmlType="submit">
        Продолжить
      </Button>
    </form>
  );
};

export default PhoneNumber;
