import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from '../../axios';
import useTimer from './time';

interface UseAuthReturn {
    userCode: string;
    errorMessage: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleConfirmClick: () => Promise<void>;
    checkLoginStatus: () => boolean;
    logout: () => void;
}

const useAuth = (): UseAuthReturn => {
    const [userCode, setUserCode] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { startTimer } = useTimer();
    const navigate = useNavigate();

    useEffect(() => {
        checkLoginStatus()
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserCode(e.target.value);
    };

    const handleConfirmClick = async () => {
        setErrorMessage(''); // Limpa mensagem de erro antes de tentar o login
        try {
            const response = await client.post('employee/login', {
                hash: userCode
            });
            const types = await client.get('type');

            types.data?.map(async (type: any) => {
                if (type._name === 'entrada') {
                    await client.post('workedHours/create', {
                        employee_id: response.data._id,
                        type_id: type._id
                    });
                }
            })

            if (response.status === 200) {
                const now = new Date();
                const expires = new Date(now.setHours(23, 59, 59, 999));
                localStorage.setItem('userCode', userCode);
                localStorage.setItem('expires', expires.toString());
                startTimer();
                const id = response.data._id
                const home = '/home/' + id
                navigate(home);


            } else {
                setErrorMessage('Usuário não encontrado');
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setErrorMessage(error.response.data.error || 'Erro desconhecido no servidor');
            } else {
                setErrorMessage('Erro de rede ou servidor indisponível');
            }
        }
    };

    const checkLoginStatus = (): boolean => {
        const storedUserCode = localStorage.getItem('userCode');
        const storedExpires = localStorage.getItem('expires');
        if (!storedUserCode || !storedExpires) {
            return false;
        }
        const now = new Date();
        const expires = new Date(storedExpires);
        if (now > expires) {
            localStorage.removeItem('userCode');
            localStorage.removeItem('expires');
            return false;
        }
        return true;
    };

    const logout = () => {
        localStorage.removeItem('userCode');
        localStorage.removeItem('expires');
        navigate('/');
    };

    return {
        userCode,
        errorMessage,
        handleInputChange,
        handleConfirmClick,
        checkLoginStatus,
        logout
    };
};

export default useAuth;
