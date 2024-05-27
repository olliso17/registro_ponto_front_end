import classes from "./FormComponent.module.css";
import { Timer, TimerStatus } from "../hooks/time";
import CardComponent from "../card/CardComponent";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
    userData: any;
    
};

const FormComponent = ({ userData }: Props) => {
    const [workedHours, setWorkedHours] = useState<any[]>([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/workedHours/created/${userData._id}`);
                setWorkedHours(response.data);
            } catch (error) {
                console.error("Error fetching worked hours data", error);
            }
        };

        if (userData._id) {
            fetchUserData();
        }
    }, [userData._id]);

    return (
        <div className={classes.container}>
            <p className={classes.text}>Dias anteriores</p>
            <div className={classes.form}>
                {workedHours.map((worked, index) => (
                    <CardComponent key={index} worked={worked} userData={userData} />
                ))}
            </div>
        </div>
    );
};

export default FormComponent;
