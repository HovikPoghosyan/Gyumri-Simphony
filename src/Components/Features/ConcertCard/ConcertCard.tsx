import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Button from 'Components/Commons/Button/Button';
import LocationIcon from 'assets/Icons/LocationIcon';
import ConcertCardPersonButton from 'Components/Commons/ConcertCardPersonButton/ConcertCardPersonButton';

import styles from './ConcertCard.module.scss';

interface ConcertCardProps {
   imageUrl: string;
   data: string;
}


function ConcertCard({ imageUrl, data }: ConcertCardProps) {
   
   library.add( far );
   library.add( fas );
   library.add( fab );

   const infoArray = [
      { 
         icon: <FontAwesomeIcon color='#9d08ed' className={ styles.infoFaIcon } icon = { ['far', 'clock'] } />, 
         name: '10:00 PM', 
         functionality: () => console.log('click') 
      },
      { 
         icon: <LocationIcon className={ styles.infoIcon }  size={20} />, 
         name: 'Gyumri', 
         functionality: () => console.log('click') 
      },
   ];

   return (
      <div className = { styles.concertCard }>
         <div className = { styles.imageWrapper }>
            <img 
               src={ imageUrl }
               className = { styles.image }
            />
         </div>
         <h3 
            className = { styles.title }
         >Cello Evening</h3>
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
            <ConcertCardPersonButton position = "Conductor" name = "Armen Kartshyan" />
            <ConcertCardPersonButton position = "Solist" name = "Artyom Richagov" />
            <ConcertCardPersonButton position = "Solist" name = "Aram Badalyan" />
         </div>
         <Button 
            className = { styles.calendarButton }
            functionality = { () => console.log('Concert Card')}
         ><FontAwesomeIcon color='#9b18fa' className={ styles.calendarIcon } icon = { ['far', 'calendar'] } />&nbsp; { data }</Button>
         {/* <Button 
            className = { styles.readMoreButton }
            functionality = { () => console.log('Concert Card')}
         >Read More</Button> */}
      </div>
   )

}

export default ConcertCard;