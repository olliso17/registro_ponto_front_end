import { useParams } from "react-router-dom";
import HomeComponent from "../components/home/HomeComponent";
import classes from "./Home.module.css";
import useUserData from "../components/hooks/getEmployeeId";

const Home = () => {
    const { id } = useParams<{ id: string }>();

    const { userData, error, loading } = useUserData(id);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={classes.home}>
            
            {userData && <HomeComponent userData={userData} />}
        </div>
    );
};

export default Home;
