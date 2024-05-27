import { useParams } from "react-router-dom";
import HomeComponent from "../components/home/HomeComponent";
import classes from "./Home.module.css";
import useUserData from "../components/hooks/getEmployeeId";
import useUserDataCreated from "../components/hooks/getWorkedHoursExitCreated";

const Home = () => {
    const { id } = useParams<{ id: string }>();
    const { userDataCreated, error: createdError, loading: createdLoading } = useUserDataCreated(id);
    const { userData, error: userError, loading: userLoading } = useUserData(id)

    if (userLoading || createdLoading) {
        return <div>Carregando...</div>;
    }
    if (userError || createdError) {
        return <div>{userError || createdError}</div>;
    }
    if (!userDataCreated) {
        return <div>Dados de saída não encontrados para o usuário com ID {id}</div>;
    }
    return (
        <div className={classes.home}>
            {userData &&
                <HomeComponent id={id} userData={userData} userDataCreated={userDataCreated} />}
        </div>
    );
};

export default Home;
