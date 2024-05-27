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
        setWorkedHours(userData)

    }, [userData._id]);

    return (
        <div className={classes.container}>
            <p className={classes.text}>Previous Days</p>
            <div className={classes.form}>
                { workedHours?.map((worked: any, index: any) => (
                    <CardComponent key={index} worked={worked} userData={userData} />
                ))}
            </div>
        </div>
    );
};

export default FormComponent;
