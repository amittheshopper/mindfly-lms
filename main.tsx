import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your App component
import './index.css'; // (Optional, if you have a CSS file)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // This should match the div in index.html
);
