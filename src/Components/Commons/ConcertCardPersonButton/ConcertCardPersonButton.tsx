import React from 'react';
import classNames from 'classnames';
 import { library } from '@fortawesome/fontawesome-svg-core';

 import { far } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';

import styles from './ConcertCardPersonButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ConcertCardPersonButtonProps {
   position: string;
   name: string;
   imageUrl?: string;
}

function ConcertCardPersonButton({ position, name, imageUrl }: ConcertCardPersonButtonProps) {

   library.add( far );
   return (
      <Button 
         className = { classNames( styles.concertCardPersonButton ) }
         functionality = { () => console.log('Concert Card Person Button')}
      >
         {
            imageUrl
               ? <img src={ imageUrl } alt={ name } className={ styles.photo } />
               : <FontAwesomeIcon icon = { [ 'far', 'user']} className ={ styles.icon } />
         }
         <div className = { styles.info }>
            <span className = { styles.name }>{ name }</span>
            <span className = { styles.position }>{ position }</span>
         </div>
      </Button>
   )
}

export default ConcertCardPersonButton;