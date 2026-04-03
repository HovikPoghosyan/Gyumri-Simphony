import React from 'react';
import classNames from 'classnames';

import UpComingSection from 'Components/Features/UpComingSection/UpComingSection';
import MenuAside from 'Components/Features/MenuAside/MenuAside';
import EventCalendar from 'Components/Features/EventCalendar/EventCalendar';
import styles from './Home.module.scss';

function Home() {

   return(
      <div className = { classNames(styles.homeContainer,  "container" ) } >
         <MenuAside />
         <main className={ classNames(styles.main, 'main')}>
            <UpComingSection />
            <EventCalendar />
         </main>
      </div>
   )
}

export default Home;