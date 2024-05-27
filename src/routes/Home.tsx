import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeComponent from "../components/home/HomeComponent";
import classes from "./Home.module.css";
import axios from "axios";

const Home = () => {
    const { id } = useParams<{ id: string}>();
    const [userData, setUserData] = useState<any>(null);
   
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/employee/${id}`);
                setUserData(response.data);
            } catch (error) {
                console.error("Erro ao obter os dados do usuário:", error);
            }
        };
        
        fetchUserData();
    }, [id]);

    return (
        <div className={classes.home}>
            {userData && <HomeComponent userData={userData}/>}
        </div>
    );
};

export default Home;
