import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

import AuthServices from '@common/api/services/auth';
import { ILoginPassword, ILoginPhone } from '@common/api/services/auth/types/login.type';
import {
  IOtpGenerate,
  IOtpGenerateResponse,
  IOtpVerification,
} from '@common/api/services/auth/types/otp.type';
import { IAuthResponse } from '@common/api/services/auth/types/user.type';
import { useAppDispatch } from '@common/hooks';

import { setUser } from '@store/slices/user.slice';

const useLoginPassword = (handleCloseModal: () => void) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (data: ILoginPassword) => {
      return AuthServices.loginPassword(data);
    },
    onSuccess: (data: IAuthResponse) => {
      dispatch(setUser(data.user));
      handleCloseModal();
    },
    onError: (err: any) => {
      return err.response?.data?.message;
    },
  });
};

const useOtpGenerate = (
  setResponseGenerateOtp: Dispatch<SetStateAction<IOtpGenerateResponse | null>>,
) => {
  return useMutation({
    mutationFn: async (data: IOtpGenerate) => {
      return AuthServices.otpGenerate(data, true);
    },
    onSuccess: (data: IOtpGenerateResponse) => {
      setResponseGenerateOtp(data);
    },
    onError: (err: any) => {
      return err.response?.data?.message;
    },
  });
};

const useOtpVerification = () => {
  return useMutation({
    mutationFn: async (data: IOtpVerification) => {
      return AuthServices.otpVerification(data);
    },
    onError: (err: any) => {
      return err.response?.data?.message;
    },
  });
};

const useLoginPhone = (handleCloseModal: () => void) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (data: ILoginPhone) => {
      return AuthServices.loginPhone(data);
    },
    onSuccess: (data: IAuthResponse) => {
      dispatch(setUser(data.user));
      handleCloseModal();
    },
    onError: (err: any) => {
      return err.response?.data?.message;
    },
  });
};

export { useLoginPassword, useOtpGenerate, useOtpVerification, useLoginPhone };
