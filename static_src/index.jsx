import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router'
import App from './components/MessageField';
// import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
   <BrowserRouter>
   <MuiThemeProvider>
   <Router />
   <App />,
   </MuiThemeProvider>
   </BrowserRouter>,
   document.getElementById('root'),
);