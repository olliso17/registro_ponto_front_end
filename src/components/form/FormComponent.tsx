import { useEffect, useState } from "react";
import { client } from "../../axios";
import CardComponent from "../card/CardComponent";
import classes from "./FormComponent.module.css";

type Props = {
    userData: any;

};

const FormComponent = ({ userData }: Props) => {

    const [workedHours, setWorkedHours]: any[] = useState([])
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await client.get('workedHours/created/' + userData._id);
                setWorkedHours(response.data)


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
                {workedHours.map((worked: any, index: any) => (
                    <CardComponent key={index} worked={worked} userData={userData} />
                ))}
            </div>
        </div>
    );
};

export default FormComponent;
