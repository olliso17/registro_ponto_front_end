import { useState, useRef, useEffect } from 'react';

export type TimerStatus = 'entrada' | 'almoco_entrada' | 'almoco_saida' | 'saida';

export interface Timer {
  hours: number;
  minutes: number;
}

const useTimer = () => {
  const [status, setStatus] = useState<TimerStatus>('entrada');
  const [time, setTime] = useState<number>(() => {
    const storedTime = localStorage.getItem('timerTime');
    return storedTime ? parseInt(storedTime, 10) : 0;
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setStatus('entrada');
    setTime(0);
    localStorage.setItem('timerTime', '0');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleTick, 60000);
  };

  const pauseTimer = async (): Promise<boolean> => {
    setStatus('almoco_entrada')
    return true;
  };

  const resumeTimer = async (): Promise<boolean> => {

    setStatus('almoco_saida');
    return true;

  };

  const stopTimer = async (): Promise<boolean> => {
    setStatus('saida');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);

    }
    localStorage.removeItem('timerTime');
    return true;
  };

  const resetTimer = () => {
    setStatus('entrada');
    setTime(0);
    localStorage.setItem('timerTime', '0');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTick = () => {
    setTime((prevTime) => {
      const newTime = prevTime + 1;
      localStorage.setItem('timerTime', newTime.toString());
      return newTime;
    });
  };

  useEffect(() => {
    if (status === 'entrada' || status === 'almoco_saida') {
      intervalRef.current = setInterval(handleTick, 60000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [status]);

  const getFormattedTime = (): Timer => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return { hours, minutes };
  };

  return {
    time: getFormattedTime(),
    status,
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
    resetTimer,
  };
};

export default useTimer;
