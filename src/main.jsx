import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Get the root element
const container = document.getElementById('root');

// 2. Create a root
const root = createRoot(container);

// 3. Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);