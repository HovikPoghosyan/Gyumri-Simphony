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
   const itemsList = [ 
      <ConcertCard imageUrl='\Images\image1.jpg' data='December 16' />, 
      <ConcertCard imageUrl='\Images\image2.jpg' data='December 17' />, 
      <ConcertCard imageUrl='\Images\image2.jpg' data='December 21' />, 
      <ConcertCard imageUrl='\Images\image3.jpg' data='December 25' />, 
   ]
   return(
      <section
         className = { styles.upComingSection }
      >  
         <h2 className={ styles.title }>Upcoming Concerts</h2>
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
                  <FontAwesomeIcon icon = { faAngleLeft }/>
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