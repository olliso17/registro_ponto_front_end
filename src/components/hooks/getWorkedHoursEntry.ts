import { useEffect, useState } from 'react';
import { client } from '../../axios';


const useUserDataEntry = (id: string | undefined) => {
    const [userDataEntry, setUserData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await client.get('workedHours/entry/' + id);
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

    return { userDataEntry, error, loading };
};

export default useUserDataEntry;
