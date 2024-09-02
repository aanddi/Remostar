export interface otpGenerateDto {
  phone: string;
}

export interface otpVerificationDto {
  phone: string;
  code: number;
  sessionId: string;
}
