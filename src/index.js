import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import ContainerComponent from './components/ContainerComponent/ContainerComponent'
render(<ContainerComponent />, document.getElementById('rootReactInitContainerComponent'));
registerServiceWorker();
