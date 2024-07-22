import React, { useState } from 'react';

import PhoneNumber from './PhoneNumber';
import Verification from './Verification';

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <div>
      {phoneNumber ? (
        <Verification phone={phoneNumber} setVerification={setPhoneNumber} />
      ) : (
        <PhoneNumber setPhoneNumber={setPhoneNumber} />
      )}
    </div>
  );
};

export default PhoneLogin;
