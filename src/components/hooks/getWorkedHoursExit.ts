import { useEffect, useState } from 'react';
import { client } from '../../server/axios';


const useUserDataExit = (id: string | undefined) => {
    const [userDataExit, setUserData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await client.get('workedHours/exit/' + id);
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

    return { userDataExit, error, loading };
};

export default useUserDataExit;
