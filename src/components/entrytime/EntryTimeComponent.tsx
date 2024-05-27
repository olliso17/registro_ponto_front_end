import FormComponent from "../form/FormComponent"
import { TimerStatus } from "../hooks/time"
import Menu from "../menu/Menu"
import Top from "../top/Top"
import classes from "./EntryTimeComponent.module.css"

type Props = {
    userData: any
    userDataEntry: any
    time: any
    status: TimerStatus
    id: string | undefined
}
const EntryTimeComponent = ({ userData, time, status, userDataEntry, id }: Props) => {
    return (
        <div className={classes.container}>
            {id ? (
                <Menu name2={"Exite Time"} name1={"Home"} router1={`/home/${id}`} router2={`/exit_time/${id}`} />) : ('')}
            <Top time={time} userData={userData} status={status} />
            <FormComponent userData={userDataEntry} />
        </div>
    )
}
export default EntryTimeComponent