// useTimer.ts
import axios from 'axios';
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
  };

  const pauseTimer = async (id: string | undefined): Promise<void> => {
    if (status === 'entrada') {
      setStatus('almoco_entrada');
      try {
        const types = await axios.get('http://localhost:3000/api/type');
        types.data.forEach(async (type: any) => {
          if (type._name === status) {
            await axios.post('http://localhost:3000/api/workedHours/create', {
              employee_id: id,
              type_id: type._id
            });
          }
        });
      } catch (error) {
        console.error('Error pausing timer:', error);
      }
    }
  };

  const resumeTimer = async (id: string | undefined): Promise<void> => {
    if (status === 'almoco_entrada') {
      setStatus('almoco_saida');
      try {
        const types = await axios.get('http://localhost:3000/api/type');
        types.data.forEach(async (type: any) => {
          if (type._name === status) {
            await axios.post('http://localhost:3000/api/workedHours/create', {
              employee_id: id,
              type_id: type._id
            });
          }
        });
      } catch (error) {
        console.error('Error resuming timer:', error);
      }
    }
  };

  const stopTimer = async (id: string | undefined): Promise<void> => {
    setStatus('saida');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    try {
      const types = await axios.get('http://localhost:3000/api/type');
      types.data.forEach(async (type: any) => {
        if (type._name === status) {
          await axios.post('http://localhost:3000/api/workedHours/create', {
            employee_id: id,
            type_id: type._id
          });
        }
      });
    } catch (error) {
      console.error('Error stopping timer:', error);
    }
    localStorage.removeItem('timerTime');
  };

  const resetTimer = () => {
    setStatus('entrada');
    setTime(0);
    localStorage.setItem('timerTime', '0');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    const handleTick = () => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        localStorage.setItem('timerTime', newTime.toString());
        return newTime;
      });
    };

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
