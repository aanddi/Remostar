import apiInstance from '@common/api/instance';

import { ILoginPassword, ILoginPhone } from './types/login.type';
import {
  IOtpGenerate,
  IOtpGenerateResponse,
  IOtpVerification,
  IOtpVerificationResponse,
} from './types/otp.type';
import { IRegisterContractors, IRegisterOwner } from './types/register.type';
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

  async registerOwner(body: IRegisterOwner) {
    const response = await apiInstance.post<IAuthResponse>('/auth/register/owner', body);
    return response.data;
  },

  async registerContactor(body: IRegisterContractors) {
    const response = await apiInstance.post<IAuthResponse>('/auth/register/conractor', body);
    return response.data;
  },

  async getNewTokens(currentRefreshToken: string | null) {
    const response = await apiInstance.post<IAuthResponse>('/auth/tokens/new', {
      refreshToken: currentRefreshToken,
    });
    return response.data;
  },

  async otpGenerate(body: IOtpGenerate, typeVerification: string) {
    const response = await apiInstance.post<IOtpGenerateResponse>(
      `/auth/otp/generate?type=${typeVerification}`,
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
