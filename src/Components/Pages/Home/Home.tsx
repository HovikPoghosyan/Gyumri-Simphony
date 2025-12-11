import React from 'react';
import classNames from 'classnames';

import UpComingSection from 'Components/Features/UpComingSection/UpComingSection';
import MenuAside from 'Components/Features/MenuAside/MenuAside';
import styles from './Home.module.scss';

function Home() {

   return(
      <div className = { classNames(styles.homeContainer,  "container" ) } >
         <MenuAside />
         <main className="main">
            <UpComingSection />
            <UpComingSection />
            <UpComingSection />
            <UpComingSection />
            <UpComingSection />
         </main>
      </div>
   )
}

export default Home;