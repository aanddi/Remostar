import apiInstance from '@common/api/instance';
import { setAuthTokens } from '@common/utils';

import { ILoginPassword, ILoginPhone } from './types/login.type';
import {
  IOtpGenerate,
  IOtpGenerateResponse,
  IOtpVerification,
  IOtpVerificationResponse,
} from './types/otp.type';
import { IAuthResponse } from './types/user.type';

const AuthServices = {
  async loginPassword(data: ILoginPassword) {
    const response = await apiInstance.post<IAuthResponse>('/auth/login/password', data);
    const { accessToken, refreshToken } = response.data;
    setAuthTokens(accessToken, refreshToken);
    return response.data;
  },

  async loginPhone(data: ILoginPhone) {
    const response = await apiInstance.post<IAuthResponse>('/auth/login/phone', data);
    const { accessToken, refreshToken } = response.data;
    setAuthTokens(accessToken, refreshToken);
    return response.data;
  },

  async otpGenerate(data: IOtpGenerate, existing: boolean) {
    const response = await apiInstance.post<IOtpGenerateResponse>(
      `/auth/otp/generate?user=${existing ? 'existing' : 'no-existing'}`,
      data,
    );
    return response.data;
  },

  async otpVerification(data: IOtpVerification) {
    const response = await apiInstance.post<IOtpVerificationResponse>(
      '/auth/otp/verification',
      data,
    );
    return response.data;
  },
};

export default AuthServices;
