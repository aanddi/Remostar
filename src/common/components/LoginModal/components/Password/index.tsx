import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input, InputPassword } from '@components';

import styles from '../Form.module.scss';

interface IPasswordLogin {
  login: string;
  password: string;
}

const PasswordLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IPasswordLogin>({
    mode: 'onChange',
  });

  const handleIPasswordLogin = useCallback((data: IPasswordLogin) => {
    console.log(data);
  }, []);

  console.log(errors.login?.message);

  return (
    <form onSubmit={handleSubmit(handleIPasswordLogin)} className={styles.form}>
      <Controller
        name="login"
        control={control}
        rules={{ required: 'Введите логин' }}
        render={({ field }) => (
          <Input label="Логин" isRequired error={errors.login?.message} {...field} />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Введите пароль',
          minLength: { value: 10, message: 'Пароль должен содержать не менее 10 символов' },
        }}
        render={({ field }) => (
          <InputPassword label="Пароль" isRequired error={errors.password?.message} {...field} />
        )}
      />
      <Button disabled={!isValid} size="large" type="primary" htmlType="submit">
        Войти
      </Button>
    </form>
  );
};

export default PasswordLogin;
