import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button, Input, InputPassword } from '@components';

import { IRegisterAdminForm } from '@common/api/services/auth/types/register.type';

import { Radio } from 'antd';

import styles from './UserForm.module.scss';

import { IRegisterFormProps, Steps } from '../types';

const UserForm = ({ setStepRegister }: IRegisterFormProps) => {
  const {
    control,
    formState: { errors, isValid },
  } = useFormContext<IRegisterAdminForm>();
  return (
    <div className={styles.userForm}>
      <p className={styles.title}>Регистрация Администратора</p>
      <form className={styles.form}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Введите имя' }}
          render={({ field }) => (
            <Input label="Имя" isRequired error={errors.name?.message} {...field} />
          )}
        />
        <Controller
          name="surname"
          control={control}
          rules={{ required: 'Введите фамилию' }}
          render={({ field }) => (
            <Input label="Фамилия" isRequired error={errors.surname?.message} {...field} />
          )}
        />
        <Controller
          name="phoneUser"
          control={control}
          render={({ field }) => <Input disabled isRequired label="Номер телефона" {...field} />}
        />
        <Controller
          name="gender"
          control={control}
          defaultValue="Мужчина"
          render={({ field }) => (
            <Radio.Group onChange={(e) => field.onChange(e.target.value)} value={field.value}>
              <Radio value="Мужчина">Мужчина</Radio>
              <Radio value="Женщина">Женщина</Radio>
            </Radio.Group>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Введите пароль',
            minLength: { value: 6, message: 'Пароль должен содержать не менее 6 символов' },
          }}
          render={({ field }) => (
            <InputPassword label="Пароль" isRequired error={errors.password?.message} {...field} />
          )}
        />
        <Button
          type="primary"
          size="large"
          disabled={!isValid}
          onClick={() => setStepRegister(Steps.Contractor)}
        >
          Продолжить
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
