import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD

import Formulario from './components/Formulario'


const container = document.getElementById('root');

ReactDOM.render (<Formulario />,container);
=======
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> ea853f52438af0f03de17df7bdab11f6e132194c
