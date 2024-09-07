import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Segmented, Title } from '@components';

import { ILoginPhone } from '@common/api/services/auth/types/login.type';
import { Roles } from '@common/api/services/auth/types/user.type';
import { VerificationPhone } from '@common/components';

import ContarctorsRegister from './components/Contarctors';
import OwnersRegister from './components/Owners';

import styles from './Registration.module.scss';

const Registration = () => {
  const [typeRegister, setTypeRegister] = useState<string>(Roles.Owner);

  const [phoneVerification, setPhoneVerification] = useState<string>('');

  const handleVerification = useCallback((data: ILoginPhone) => {
    setPhoneVerification(data.phone);
  }, []);
  return (
    <div className={styles.registration}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Title title="Регистрация" level={3} className={styles.title} />
            <Segmented
              size="large"
              options={[
                { value: Roles.Owner, label: 'Собственник' },
                { value: Roles.Employee, label: 'Подрядчик' },
              ]}
              value={typeRegister}
              onChange={(valueSegmented) => setTypeRegister(valueSegmented as Roles)}
            />
          </div>
          <div className={styles.form}>
            {!phoneVerification && (
              <VerificationPhone
                typeVerification="register"
                classNameForm={styles.verification}
                handleVerification={handleVerification}
                classNameBackButton={styles.backVerification}
              />
            )}

            {phoneVerification && typeRegister === Roles.Owner && (
              <OwnersRegister phone={phoneVerification} />
            )}
            {phoneVerification && typeRegister === Roles.Employee && (
              <ContarctorsRegister phone={phoneVerification} />
            )}
          </div>
          <div className={styles.footer}>
            <p>
              Регистрируясь, вы принимаете условия <Link to="/">Правила</Link> и{' '}
              <Link to="/">Соглашения</Link> об использовании сайта и даете Согласие на обработку
              персональных данных
            </p>
            {phoneVerification && (
              <Button
                size="small"
                type="link"
                className={styles.resetPhone}
                onClick={() => setPhoneVerification('')}
              >
                Ввести другой номер телефона
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
