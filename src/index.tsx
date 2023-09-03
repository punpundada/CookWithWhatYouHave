import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundry } from './errorBoundry/ErrorBoundry';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundry errorElement={(error)=>{
      return(
        <div>
            <p>Error Message: {error.message}</p>
            <p>Error Stack: {error.stack}</p>
          </div>
      )
    }} >
    <App />
    </ErrorBoundry>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
