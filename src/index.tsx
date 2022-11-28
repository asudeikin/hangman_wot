import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GameModelProvider } from './hooks/useMainReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameModelProvider>
      <App />
    </GameModelProvider>
  </React.StrictMode>
);

