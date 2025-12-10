import React from 'react';
import classNames from 'classnames';
import AliceCarousel from 'react-alice-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
   faAngleLeft,
   faAngleRight
} from '@fortawesome/free-solid-svg-icons';


import ConcertCard from '../ConcertCard/ConcertCard';
import Button from 'Components/Commons/Button/Button';

import styles from './UpComingSection.module.scss';
import './Carousel.css';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

function UpComingSection() {
   const itemsList = [ <ConcertCard />, <ConcertCard />, <ConcertCard />, <ConcertCard />, <ConcertCard />]
   return(
      <section
         className = { styles.upComingSection }
      >  
         <AliceCarousel
            items={itemsList}
            mouseTracking
            infinite
            renderPrevButton = {({ isDisabled }) => (
               <Button
                  isDisable = { isDisabled }
                  functionality = { () => console.log('previous concert') }
                  className = { classNames( styles.sliderBtn, styles.prevBtn ) }
               >
                  <FontAwesomeIcon icon = { faAngleLeft } size = "lg" />
               </Button>
            )}
            renderNextButton = {({ isDisabled }) => (
               <Button
                  isDisable = { isDisabled }
                  functionality = { () => console.log('next concert') }
                  className = { classNames( styles.sliderBtn, styles.nextBtn ) }
               >
                  <FontAwesomeIcon icon = { faAngleRight } />
               </Button>
            )}
         />

      </section>
   )
}

export default UpComingSection;