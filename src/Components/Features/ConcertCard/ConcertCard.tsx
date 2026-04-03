import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import Button from 'Components/Commons/Button/Button';
import ConcertCardPersonButton from 'Components/Commons/ConcertCardPersonButton/ConcertCardPersonButton';

import styles from './ConcertCard.module.scss';

interface ConcertCardProps {
   imageUrl: string;
   data: string;
   members: { position: string, name: string, imageUrl?: string }[];
   time: string,
   location: string,
   price: string,
   title: string,
   onCalendarClick?: () => void,
}


function ConcertCard({ imageUrl, data, members, time, location, price, title, onCalendarClick }: ConcertCardProps) {
   return (
      <div className = { styles.concertCard }>
         <div className = { styles.imageWrapper }>
            <img 
               src={ imageUrl }
               className = { styles.image }
               alt={ title }
            />

            <div className={ styles.imageFade } />

            <span className={ styles.dateChip }>{ data }, 2026</span>

         </div>

         <div className={ styles.footerRow }>
            <div className = { styles.membersBlock }>
               {
                  members.map(( member ) => (
                     <ConcertCardPersonButton
                        key={ `${member.name}-${member.position}` }
                        position = { member.position }
                        name = { member.name }
                        imageUrl={ member.imageUrl }
                     />
                  ))
               }
            </div>

            <div className={ styles.actionBlock }>
               <h4 className={ styles.actionTitle }>{ title }</h4>
               <p className={ styles.actionPlace }>{ location }</p>

               <div className={ styles.metaInfoRow }>
                  <span className={ styles.metaInfoItem }>
                     <FontAwesomeIcon icon={ faClock } className={ styles.metaInfoIcon } />
                     { time }
                  </span>
                  <span className={ styles.metaInfoItem }>
                     <FontAwesomeIcon icon={ faTicket } className={ styles.metaInfoIcon } />
                     { price }
                  </span>
               </div>

               <Button 
                  className = { styles.calendarButton }
                  functionality = { onCalendarClick || (() => console.log('Concert Card')) }
               >
                  Read More
               </Button>
            </div>
         </div>
      </div>
   )

}

export default ConcertCard;