import { useState, useEffect } from 'react';

interface FormattedDateTime {
  formattedDate: string;
  formattedTime: string;
}

const useFormattedDateTime = (dateTimeString: string | undefined): FormattedDateTime => {
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    if (dateTimeString) {
      const dateObj = new Date(dateTimeString);

      // Função para formatar a data no formato dd/mm/yy
      const formatarData = (data: Date): string => {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = String(data.getFullYear()).slice(-2);
        return `${dia}/${mes}/${ano}`;
      };

      // Função para formatar a hora e minuto no formato hh'h' mm'm'
      const formatarHoraMinuto = (data: Date): string => {
        const horas = String(data.getHours());
        const minutos = String(data.getMinutes());
        return `${horas}h ${minutos}m`;
      };

      setFormattedDate(formatarData(dateObj));
      setFormattedTime(formatarHoraMinuto(dateObj));
    }
  }, [dateTimeString]);

  return { formattedDate, formattedTime };
};

export default useFormattedDateTime;
