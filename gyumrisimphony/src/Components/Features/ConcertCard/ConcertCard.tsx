import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Button from 'Components/Commons/Button/Button';

import styles from './ConcertCard.module.scss';

function ConcertCard() {

   return (
      <div className = { styles.concertCard }>
         <img 
            src = { "https://www.bsu.edu/-/media/www/departmentalcontent/musicschool/images/ensembles/bsso-2024-robbins.jpeg?sc_lang=en&hash=C7E16D07856C1F3790F2A59C29DA4985B16976A1" }
            className = { styles.image }
         />
         <Button 
            className = { styles.calendarButton }
            functionality = { () => console.log('Concert Card')}
         >October 18</Button>
         <h3 
            className = { styles.title }
         >Just Dream</h3>
         <Button 
            className = { styles.readMoreButton }
            functionality = { () => console.log('Concert Card')}
         >Read More</Button>
         <div className = { styles.infoBlock }>

         </div>
      </div>
   )

}

export default ConcertCard;