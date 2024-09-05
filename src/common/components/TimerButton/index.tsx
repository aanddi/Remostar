import React, { useEffect, useState } from 'react';

import { Button } from '@components';

interface ITimerButton {
  timerLimit: number;
  title?: string;
  handleResend: () => void;
}

const TimerButton = ({ timerLimit, title = 'Повторить отправку', handleResend }: ITimerButton) => {
  const [timer, setTimer] = useState(timerLimit);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendTimer = () => {
    handleResend();
    setTimer(timerLimit);
  };

  return (
    <Button type="text" size="large" onClick={handleResendTimer} disabled={!!timer}>
      {title} {timer > 0 && `через ${timer} сек`}
    </Button>
  );
};

export default TimerButton;
