import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//zerar padding, border e etc...
import { CssBaseline } from '@material-ui/core';

ReactDOM.render (
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

