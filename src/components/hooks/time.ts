import { useState, useRef, useEffect } from 'react';

export type TimerStatus = 'entrada' | 'almoco_entrada' | 'almoco_saida' | 'saida';

export interface Timer {
  hours: number;
  minutes: number;
}

const useTimer = () => {
  const [status, setStatus] = useState<TimerStatus>(() => {
    const storedStatus = localStorage.getItem('timerStatus');
    return storedStatus ? (storedStatus as TimerStatus) : 'entrada';
  });
  const [time, setTime] = useState<number>(() => {
    const storedTime = localStorage.getItem('timerTime');
    return storedTime ? parseInt(storedTime, 10) : 0;
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setStatus('entrada');
    setTime(0);
    localStorage.setItem('timerStatus', 'entrada');
    localStorage.setItem('timerTime', '0');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleTick, 60000);
  };

  const pauseTimer = async () => {
    setStatus('almoco_entrada');
    localStorage.setItem('timerStatus', 'almoco_entrada');
  };

  const resumeTimer = async () => {
    setStatus('almoco_saida');
    localStorage.setItem('timerStatus', 'almoco_saida');
  };

  const stopTimer = async () => {
    setStatus('saida');
    localStorage.setItem('timerStatus', 'saida');
  
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
    stopTimer
  };
};

export default useTimer;
