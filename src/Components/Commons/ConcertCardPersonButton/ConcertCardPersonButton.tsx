import React from 'react';
import classNames from 'classnames';
import { faUser } from '@fortawesome/free-solid-svg-icons';
 import { library } from '@fortawesome/fontawesome-svg-core';

 import { far } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';

import styles from './ConcertCardPersonButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ConcertCardPersonButtonProps {
   position: string;
   name: string;
}

function ConcertCardPersonButton({ position, name }: ConcertCardPersonButtonProps) {

   library.add( far );
   return (
      <Button 
         className = { classNames( styles.concertCardPersonButton ) }
         functionality = { () => console.log('Concert Card Person Button')}
      >
         <FontAwesomeIcon icon = { [ 'far', 'user']} className ={ styles.icon } />
         <div className = { styles.info }>
            <span className = { styles.position }>{ position }</span>
            <span className = { styles.name }>{ name }</span>
         </div>
      </Button>
   )
}

export default ConcertCardPersonButton;