import React, { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Aos from 'aos';

import styles from './App.module.scss';


function App() {

   useEffect( () => { Aos.init() }, [] );
   
   return (
      <div className = "wrapper">
         {/* <Header /> */}
         {/* <Suspense fallback = { <LoadingCircle /> }> */}
            <Outlet />
         {/* </Suspense> */}
         {/* <Footer /> */}
      </div>
   )
}

export default App;

