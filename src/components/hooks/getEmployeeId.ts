import { useState, useEffect } from 'react';
import axios from 'axios';


const useUserData = (id:string | undefined) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/employee/${id}`);
                setUserData(response.data);
            } catch (error) {
                setError("Erro ao obter os dados do usuário: " + (error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUserData();
        }
    }, [id]);

    return { userData, error, loading };
};

export default useUserData;
