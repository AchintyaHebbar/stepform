import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Content from './Content'
ReactDOM.render(
  <Content>
  <React.StrictMode>
    <App />
  </React.StrictMode></Content>,
  document.getElementById('root')
);

reportWebVitals();
