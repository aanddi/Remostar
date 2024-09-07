import React, { useState } from 'react';

import { ILoginPhone } from '@common/api/services/auth/types/login.type';
import { IOtpGenerateResponse } from '@common/api/services/auth/types/otp.type';

import Code from './components/Code';
import Phone from './components/Phone';

import styles from './VerificationPhone.module.scss';

interface IVerificationPhone {
  typeVerification: 'register' | 'login';
  handleVerification: (data: ILoginPhone) => void;
  titlePhone?: string;
  classNameForm?: string;
  classNameBackButton?: string;
}

const VerificationPhone = ({
  handleVerification,
  typeVerification,
  titlePhone,
  classNameForm,
  classNameBackButton,
}: IVerificationPhone) => {
  const [verificationState, setVerificationState] = useState<IOtpGenerateResponse | null>(null);
  return (
    <div className={`${styles.content} ${classNameForm}`}>
      {verificationState ? (
        <Code
          typeVerification={typeVerification}
          verificationState={verificationState}
          setVerificationState={setVerificationState}
          handleVerification={handleVerification}
          classNameBackButton={classNameBackButton}
        />
      ) : (
        <Phone
          typeVerification={typeVerification}
          setVerificationState={setVerificationState}
          titlePhone={titlePhone}
        />
      )}
    </div>
  );
};

export default VerificationPhone;
