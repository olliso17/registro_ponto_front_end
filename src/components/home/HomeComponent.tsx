
import { FaPowerOff } from 'react-icons/fa';
import ButtonIcon from "../button/ButtonIcon";
import ButtonMenu from "../button/ButtonMenu";
import FormComponent from "../form/FormComponent";
import TimerComponent from "../time/TimeComponent";
type Props = {
    userData: any
}

const HomeComponent = ({ userData }: Props) => {

    return (
        <div>
            <div>
                <ButtonMenu name="Entry Time" router="/entry_time" />
                <ButtonMenu name="Exite Time" router="/exit_time" />
                <ButtonIcon children={<FaPowerOff className="icon" />} />

            </div>

            <TimerComponent userData={userData} />
            <FormComponent userData={userData} />
        </div>
    )
}
export default HomeComponent