import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'index.css';

import routesConfig from 'RoutesConfig/RoutesConfig';
import configureReduxStore from 'store/configureReduxStore';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");
const root = ReactDOM.createRoot(rootElement);
const store = configureReduxStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routesConfig()} />
    </Provider>
  </React.StrictMode>
);
