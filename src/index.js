import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ROUTES from './route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(ROUTES, document.getElementById('root'));
registerServiceWorker();
