import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from 'App/App';

import Home from 'Components/Pages/Home/Home';

function routesConfig() {
   return createBrowserRouter([
      {
         path: '/',
         element: <App/>,
         children: [
            {
               index: true,
               element: <Home />
            }
         ]
      },
   ]);
}

export default routesConfig;
