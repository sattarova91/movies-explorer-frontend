import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

import MessageProvider from './contexts/MessageContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MessageProvider>
        <App />
      </MessageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
