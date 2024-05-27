import classes from "./ButtonIcon.module.css"

type Props = {
    children: JSX.Element
}


const ButtonIcon = ({ children }: Props) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    )
}

export default ButtonIcon