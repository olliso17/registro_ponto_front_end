import classes from './Button.module.css'

type Props = {
    name:string
}

const Button = ({name}:Props)=>{
    return (
         <button className={classes.button}>{name}</button>
    )
   
}

export default Button