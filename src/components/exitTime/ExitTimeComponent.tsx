import FormComponent from "../form/FormComponent"
import { TimerStatus } from "../hooks/time"
import Menu from "../menu/Menu"
import Top from "../top/Top"
import classes from "./ExitTimeComponent.module.css"

type Props = {
    userData: any
    time: any
    status: TimerStatus
    userDataExit: any
    id: string | undefined
}
const ExitTimeComponent = ({ userData, time, status, userDataExit, id }: Props) => {

    return (
        <div className={classes.container}>
            {id ? (<Menu name2={"Home"} name1={"Entry Time"} router1={`/entry_time/${id}`} router2={`/home/${id}`} />) : ('')}
            <Top time={time} userData={userData} status={status} />
            <FormComponent userData={userDataExit} />
        </div>
    )
}
export default ExitTimeComponent