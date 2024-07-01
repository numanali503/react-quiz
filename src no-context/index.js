import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './componenets/App';
import Challange from './Challange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Challange />
    {/* <App /> */}
  </React.StrictMode>
);
