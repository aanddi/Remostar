import apiInstance from '@common/api/instance';

import { ILoginPassword, ILoginPhone } from './types/login.type';
import {
  IOtpGenerate,
  IOtpGenerateResponse,
  IOtpVerification,
  IOtpVerificationResponse,
} from './types/otp.type';
import { IAuthResponse } from './types/user.type';

const AuthServices = {
  async loginPassword(body: ILoginPassword) {
    const response = await apiInstance.post<IAuthResponse>('/auth/login/password', body);
    return response.data;
  },

  async loginPhone(body: ILoginPhone) {
    const response = await apiInstance.post<IAuthResponse>('/auth/login/phone', body);
    return response.data;
  },

  async getNewTokens(currentRefreshToken: string | null) {
    const response = await apiInstance.post<IAuthResponse>('/auth/tokens/new', {
      refreshToken: currentRefreshToken,
    });
    return response.data;
  },

  async otpGenerate(body: IOtpGenerate, existing: boolean) {
    const response = await apiInstance.post<IOtpGenerateResponse>(
      `/auth/otp/generate?user=${existing ? 'existing' : 'no-existing'}`,
      body,
    );
    return response.data;
  },

  async otpVerification(body: IOtpVerification) {
    const response = await apiInstance.post<IOtpVerificationResponse>(
      '/auth/otp/verification',
      body,
    );
    return response.data;
  },
};

export default AuthServices;
