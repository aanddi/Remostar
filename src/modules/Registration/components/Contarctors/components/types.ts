import { Dispatch, SetStateAction } from 'react';

enum Steps {
  User = 'User',
  Contractor = 'Contractor',
}

interface IRegisterFormProps {
  setStepRegister: Dispatch<SetStateAction<Steps>>;
}

export type { IRegisterFormProps };
export { Steps };
