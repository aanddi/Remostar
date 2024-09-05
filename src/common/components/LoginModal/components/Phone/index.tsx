import React, { useState } from 'react';

import { IOtpGenerateResponse } from '@common/api/services/auth/types/otp.type';

import PhoneNumber from './components/PhoneNumber';
import Verification from './components/Verification/Verification';

const PhoneLogin = () => {
  const [responseGenerateOtp, setResponseGenerateOtp] = useState<IOtpGenerateResponse | null>(null);
  return (
    <div>
      {responseGenerateOtp ? (
        <Verification
          responseGenerateOtp={responseGenerateOtp}
          setVerification={setResponseGenerateOtp}
        />
      ) : (
        <PhoneNumber setResponseGenerateOtp={setResponseGenerateOtp} />
      )}
    </div>
  );
};

export default PhoneLogin;
