import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App.js';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <div id='parent'>
    <App />
    </div>
      

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
