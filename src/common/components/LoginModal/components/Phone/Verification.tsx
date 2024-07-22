import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, InputOtp } from '@components';

import { formatPhone } from '@common/utils/formatter';

import { IoIosArrowBack } from 'react-icons/io';

import styles from '../Form.module.scss';
import { IVerification } from '../types';

interface IVerificationpProps {
  phone: string;
  setVerification: (state: string) => void;
}

const TIMER_REPEAT = 60;

const Verification = ({ phone, setVerification }: IVerificationpProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IVerification>({
    mode: 'onChange',
  });

  const [timer, setTimer] = useState(TIMER_REPEAT);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(TIMER_REPEAT);
  };

  const handleVerification = useCallback((data: IVerification) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(handleVerification)} className={styles.form}>
      <Button
        className={styles.back}
        onClick={() => setVerification('')}
        icon={<IoIosArrowBack size={20} />}
      />
      <div className={styles.textPhone}>
        Мы отправили код на номер телефона <span>{formatPhone(String(phone))}</span>
      </div>
      <Controller
        name="code"
        control={control}
        rules={{ required: 'Введите номер телефона' }}
        render={({ field: { value, ...restField } }) => <InputOtp length={5} {...restField} />}
      />
      <Button disabled={!isValid} size="large" type="primary" htmlType="submit">
        Войти
      </Button>
      <Button type="text" className={styles.repeat} onClick={handleResend} disabled={!!timer}>
        Повторить отправку {timer > 0 && `через ${timer} сек`}
      </Button>
    </form>
  );
};

export default Verification;
