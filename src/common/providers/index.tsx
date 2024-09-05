import React, { PropsWithChildren } from 'react';

import CitysProvider from './ModalProviders/CitysProvides';
import LoginProvider from './ModalProviders/LoginProvider';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <LoginProvider>
      <CitysProvider>{children}</CitysProvider>
    </LoginProvider>
  );
};

export default AppProviders;
