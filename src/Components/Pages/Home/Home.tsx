import React from 'react';
import classNames from 'classnames';
import SnowfallEffect from 'Components/Features/SnowfallEffect/SnowfallEffect';

import UpComingSection from 'Components/Features/UpComingSection/UpComingSection';
import MenuAside from 'Components/Features/MenuAside/MenuAside';
import styles from './Home.module.scss';

import ToTopBtn from 'Components/Features/ToTopBtn/ToTopBtn';

function Home() {

   return(
      <div className = { classNames(styles.homeContainer,  "container" ) } >
         <ToTopBtn />
         <MenuAside />
         <main className={ classNames(styles.main, 'main')}>
            <UpComingSection />
         </main>
         <SnowfallEffect intensity={100} />
      </div>
   )
}

export default Home;