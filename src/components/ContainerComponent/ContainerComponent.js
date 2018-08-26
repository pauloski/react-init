import React from 'react';
import './ContainerComponent.css';

import HolaMundoCC from './../HolaMundoCC/HolaMundoCC';
import HolaMundoFC from './../HolaMundoFC/HolaMundoFC';

class ContainerComponent extends React.Component {
    render(){
        return <div className="ContainerComponent">
        contenedor del componente
        <HolaMundoCC />
        <HolaMundoFC />
        </div>
    }
}

export default ContainerComponent;