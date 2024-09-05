interface IOtpGenerate {
  phone: string;
}

interface IOtpGenerateResponse {
  phone: string;
  sessionSmsId: string;
}

interface IOtpVerification {
  phone: string;
  code: string;
  sessionSmsId: string;
}

interface IOtpVerificationResponse {
  phone: string;
  code: string;
  sessionSmsId: string;
}

export type { IOtpGenerate, IOtpGenerateResponse, IOtpVerification, IOtpVerificationResponse };
