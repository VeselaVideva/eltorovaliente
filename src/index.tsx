import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppWithColorScheme } from "./components/AppWithColorScheme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppWithColorScheme/>
    </React.StrictMode>
);
