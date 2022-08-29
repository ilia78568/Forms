import * as React from "react"
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('root') as Element
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

