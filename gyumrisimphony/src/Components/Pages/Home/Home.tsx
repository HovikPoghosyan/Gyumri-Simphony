import React from 'react';

import UpComingSection from 'Components/Features/UpComingSection/UpComingSection';
import styles from './Home.module.scss';

function Home() {

   return(
      <main>
         <div className = { "container" }>
            <UpComingSection />
         </div>
      </main>
   )
}

export default Home;