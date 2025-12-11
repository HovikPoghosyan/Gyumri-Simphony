import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Button from 'Components/Commons/Button/Button';
import ConcertCardPersonButton from 'Components/Commons/ConcertCardPersonButton/ConcertCardPersonButton';

import styles from './ConcertCard.module.scss';

function ConcertCard() {
   
   library.add( far );
   library.add( fas );
   library.add( fab );

   const infoArray = [
      { 
         icon: <FontAwesomeIcon color='#9b18fa' className={ styles.infoIcon } icon = { ['far', 'clock'] } />, 
         name: '10:00 PM', 
         functionality: () => console.log('click') 
      },
      { 
         icon: <FontAwesomeIcon color='#9b18fa' className={ styles.infoIcon } icon = { ['fas', 'map-location-dot'] } />, 
         name: 'Gyumri', 
         functionality: () => console.log('click') 
      },
   ];

   return (
      <div className = { styles.concertCard }>
         <div className = { styles.imageWrapper }>
            <img 
               src = { "https://www.bsu.edu/-/media/www/departmentalcontent/musicschool/images/ensembles/bsso-2024-robbins.jpeg?sc_lang=en&hash=C7E16D07856C1F3790F2A59C29DA4985B16976A1" }
               className = { styles.image }
            />
         </div>
         <h3 
            className = { styles.title }
         >Opera Gala Night</h3>
         <div className = { styles.dateBlock }>
            {
               infoArray.map((info, index) => <Button 
                     key = { index }
                     className = { styles.dateBlockButton }
                     functionality = { info.functionality }
                  >{info.icon}{info.name}</Button>
               )
            }
         </div>
         <div className = { styles.membersBlock }>
            <ConcertCardPersonButton position = "Conductor" name = "John Doe" />
            <ConcertCardPersonButton position = "Pianist" name = "Jane Smith" />
         </div>
         <Button 
            className = { styles.calendarButton }
            functionality = { () => console.log('Concert Card')}
         >October 18</Button>
         <Button 
            className = { styles.readMoreButton }
            functionality = { () => console.log('Concert Card')}
         >Read More</Button>
      </div>
   )

}

export default ConcertCard;