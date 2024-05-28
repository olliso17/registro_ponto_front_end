import { useEffect, useState } from 'react';
import { client } from '../../server/axios';


const useUserDataCreated = (id: string | undefined) => {
    const [userDataCreated, setUserData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await client.get('workedHours/created/' + id);
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

    return { userDataCreated, error, loading };
};

export default useUserDataCreated;
