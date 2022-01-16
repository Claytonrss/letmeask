import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import { MockServer } from './services/miragejs/MockServer';

const environment = process.env.NODE_ENV;
if (environment !== 'production') {
  MockServer({ environment });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
