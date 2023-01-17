import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './i18n';
import App from './App';
import { ContextProvider } from './context/Context';
import { FormProvider } from './context/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <FormProvider>
    <App />
    </FormProvider>
  </ContextProvider>
);
