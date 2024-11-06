/*

src/index.js

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoadingProvider } from './context/LoadingContext';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

/* Gets root element */
const rootElement = document.getElementById('root');

/* Test if element exists ibside DOM */
if (rootElement) {
  /* Instantiates root element */
  const root = ReactDOM.createRoot(rootElement);

  const renderApp = () => (
    <React.StrictMode>
      <ErrorBoundary>
        <LoadingProvider>
          <div id="main-wrapper">
            <App />
          </div>
        </LoadingProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );

  root.render(renderApp());
} else {
  /* Case null, returns error */
  console.error('Root element not found');
}
