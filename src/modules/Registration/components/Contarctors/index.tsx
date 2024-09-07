import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IRegisterContractors } from '@common/api/services/auth/types/register.type';

import ContractorForm from './components/ContractorForm';
import UserForm from './components/UserForm';
import { Steps } from './components/types';

import styles from './Contarctors.module.scss';

interface IContarctorsRegister {
  phone: string;
}

const ContarctorsRegister = ({ phone }: IContarctorsRegister) => {
  const methods = useForm<IRegisterContractors>({
    mode: 'onChange',
    defaultValues: {
      phoneUser: phone,
    },
  });

  const [stepsRegister, setStepRegister] = useState(Steps.User);

  return (
    <div className={styles.contactor}>
      <FormProvider {...methods}>
        {stepsRegister === Steps.User && <UserForm setStepRegister={setStepRegister} />}
        {stepsRegister === Steps.Contractor && <ContractorForm setStepRegister={setStepRegister} />}
      </FormProvider>
    </div>
  );
};

export default ContarctorsRegister;
