import React from 'react';
import './HolaMundoCC.css';
import logo from '../../images/logo.svg'

class HolaMundoCC extends React.Component {
    render() {
        return <div>
            <p>Hola Mundo Class Component</p>
            <img src={logo} alt="logo" />
        </div>
    }
}

export default HolaMundoCC