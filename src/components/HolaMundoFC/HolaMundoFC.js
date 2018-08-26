import React from 'react';
import './HolaMundoFC.css';
import logo from '../../images/logo.svg'

const HolaMundoFC = () =>{
    return(
        <div>
            hola mundo functional component
            <img src={logo} alt="logo" />
        </div>
    )
}

export default HolaMundoFC;