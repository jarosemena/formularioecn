import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import Formulario from './components/Formulario'

const container = document.getElementById('app');

ReactDOM.render (<Formulario />,container);
