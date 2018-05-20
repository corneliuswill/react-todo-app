import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
