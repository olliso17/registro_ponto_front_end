import React from 'react'
import FormComponent from '../components/form/FormComponent'

const ExitTime = ()=>{
    return(
        <div>
            <Top time={time} userData={userData} status={status}/>

            <FormComponent name="Hora de Saída"/>
        </div>
    )
}

export default ExitTime