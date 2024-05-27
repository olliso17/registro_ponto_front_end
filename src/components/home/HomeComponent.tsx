import FormComponent from "../form/FormComponent";
import TimerComponent from "../time/TimeComponent";
import classes from "./HomeComponent.module.css";
import Menu from '../menu/Menu';

type Props = {
    userData: any
    userDataCreated: any
    id: string | undefined
}

const HomeComponent = ({ userData, userDataCreated, id }: Props) => {

    return (
        <div className={classes.container}>
            {id ? (
                <Menu name2={"Exite Time"} name1={"Entry Time"} router1={`/entry_time/${id}`} router2={`/exit_time/${id}`} />) : ('')}

            <TimerComponent userData={userData} />
            <FormComponent userData={userDataCreated} />
        </div>
    )
}
export default HomeComponent