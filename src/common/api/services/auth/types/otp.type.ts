interface IOtpGenerate {
  phone: string;
}

interface IOtpGenerateResponse {
  phone: string;
  sessionId: string;
}

interface IOtpVerification {
  phone: string;
  code: string;
  sessionId: string;
}

interface IOtpVerificationResponse {
  phone: string;
  code: string;
  sessionId: string;
}

export type { IOtpGenerate, IOtpGenerateResponse, IOtpVerification, IOtpVerificationResponse };
