import React from 'react';
import classes from './LoginComponent.module.css'; 
import useAuth from '../hooks/useAuth';
import Button from '../button/Button';

const LoginComponent: React.FC = () => {
    const { userCode, errorMessage, handleInputChange, handleConfirmClick } = useAuth();

    return (
        <>
            <div className={classes.loginComponent}>
                <p className={classes.title}>Ponto <span className={classes.span}>Ilumeo</span></p>
                <input
                    type="text"
                    className={classes.input}
                    placeholder='Código do Usuário'
                    value={userCode}
                    onChange={handleInputChange}
                />
                <Button name='Confirmar' onClick={handleConfirmClick} />
                {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            </div>
        </>
    );
};

export default LoginComponent;
