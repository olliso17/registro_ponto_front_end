
import TimerComponent from "../time/TimeComponent"
import FormComponent from "../form/FormComponent"

type Props = {
    userData: any
}

const HomeComponent = ({ userData }: Props) => {
 
    return (
        <div>
            <TimerComponent userData={userData}  />
            <FormComponent userData={userData}/>
        </div>
    )
}
export default HomeComponent