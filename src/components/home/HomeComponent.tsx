import TimerComponent from "../time/TimeComponent"

type Props = {
    userData: any
}

const HomeComponent = ({ userData }: Props) => {

    return (
        <div>
            <TimerComponent userData={userData}  />
        </div>
    )
}
export default HomeComponent