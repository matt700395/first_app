import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Clock from './clock_proj/clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
})









{/*
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

*/}

reportWebVitals();