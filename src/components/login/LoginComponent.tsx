import Button from '../button/Button'
import classes from './LoginComponent.module.css'


const LoginComponent= () => {

    return (
        <>
            <div className={classes.loginComponent}>
                <p className={classes.title}>Ponto <span className={classes.span}>Ilumeo</span></p>
                <input type="text" className={classes.input} placeholder='Código do Usuário'/>
               <Button name='Confirmar'/>
            </div>
        </>
    )
}

export default LoginComponent

