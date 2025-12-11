import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { 
   faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import Logo from 'Components/Commons/Logo/Logo';
import Button from 'Components/Commons/Button/Button';

import styles from './Header.module.scss';

function Header() {  
   return (
      <header className = { styles.header }>
         <div className = { classNames( 'container', styles.container ) } >
            <Logo />
            <h1 className = { styles.title }>Gyumri State Symphony Orchestra</h1>
            <Button
               functionality = { () => console.log('language')}
               className= { styles.languageSwitcher }
            >
               <img
                  alt="United States"
                  src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                  className={ styles.flag }
               />
               <FontAwesomeIcon 
                  icon = { faAngleDown } 
                  style = {{ marginLeft: '8px' }}
               />
            </Button>
         </div>
      </header>
   );
}

export default Header;