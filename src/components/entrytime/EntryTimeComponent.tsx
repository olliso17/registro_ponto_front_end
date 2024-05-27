import FormComponent from "../form/FormComponent"
import { TimerStatus } from "../hooks/time"
import Top from "../top/Top"
import classes from "./EntryTimeComponent.module.css"

type Props = {
    userData: any
    time: any
    status: TimerStatus
}
const EntryTimeComponent = ({ userData, time, status }: Props) => {

    return (
        <div className={classes.container}>
            <Top time={time} userData={userData} status={status} />
            <FormComponent userData={userData} />
        </div>
    )
}
export default EntryTimeComponent