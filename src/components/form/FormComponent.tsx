import classes from "./FormComponent.module.css"
import Button from '../button/Button';
import Top from "../top/Top";

type Props = {
    name: string
}

const FormComponent = ({ name }: Props) => {
    return (
        <div className={classes.container}>
            <Top />
            <Button name={name} />
            <p className={classes.text}>Dias anteriores</p>
            <div className={classes.form}>
                <div className={classes.card}>
                    <p className={classes.hours}>03/11/23</p>
                    <p className={classes.time}>07h 40m</p>
                </div>
            </div>

        </div>
    )
}

export default FormComponent