import { FaPowerOff } from "react-icons/fa"
import ButtonIcon from "../button/ButtonIcon"
import ButtonMenu from "../button/ButtonMenu"
import classes from "./Menu.module.css"

type Props = {
    router1: string
    router2: string
    name1:string
    name2:string
}

const Menu = ({router1, router2, name1, name2}:Props) => {
    return (
        <div className={classes.menu}>
            <div>
                <ButtonMenu name={name1} router={router1} />
                <ButtonMenu name={name2} router={router2} />
            </div>

            <ButtonIcon children={<FaPowerOff className="icon" />} />

        </div>
    )
}

export default Menu