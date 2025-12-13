import React from 'react';
import classNames from 'classnames';
import SnowfallEffect from 'Components/Features/SnowfallEffect/SnowfallEffect';

import UpComingSection from 'Components/Features/UpComingSection/UpComingSection';
import MenuAside from 'Components/Features/MenuAside/MenuAside';
import styles from './Home.module.scss';

function Home() {

   return(
      <div className = { classNames(styles.homeContainer,  "container" ) } >
         <MenuAside />
         <main className={ classNames(styles.main, 'main')}>
            <UpComingSection />
         </main>
         <SnowfallEffect intensity={100} />
      </div>
   )
}

export default Home;