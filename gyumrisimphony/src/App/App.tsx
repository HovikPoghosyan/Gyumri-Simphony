import React, { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Aos from 'aos';

import Header from 'Components/Layoutes/Header/Header';
import Footer from 'Components/Layoutes/Footer/Footer';

import styles from './App.module.scss';


function App() {
   const imageUrl = "https://media.istockphoto.com/id/485756494/photo/orchestra-conductor-on-stage.jpg?s=612x612&w=0&k=20&c=ILgdVktNrZtIFBGtJ7rwZON7mtPZLZSrlL_hAJNGxfM=";

   useEffect( () => { Aos.init() }, [] );
   
   return (
      <div className = "wrapper"
         // style = {{ backgroundImage: `url(${ imageUrl })` }}
      >
            <Header />
            <Outlet />
            <Footer />
         {/* <Suspense fallback = { <LoadingCircle /> }> */}
         {/* </Suspense> */}
         {/* <Footer /> */}
      </div>
   )
}

export default App;

