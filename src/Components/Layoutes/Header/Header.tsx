import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { 
   faAngleDown,
   faBars
} from '@fortawesome/free-solid-svg-icons';

import MobileMenu from 'Components/Features/MobileMenu/MobileMenu';
import Logo from 'Components/Commons/Logo/Logo';
import Button from 'Components/Commons/Button/Button';
import { setMobileMenuOpen } from 'store/modules/appReducer';

import styles from './Header.module.scss';

function Header() {  
   const dispatch = useDispatch();
   const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

   useEffect(() => {
      const handleResize = () => {
         setViewportHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleMobileMenuOpen = () => {
      dispatch(setMobileMenuOpen(true));
   };

   return (
      <header className = { styles.header } style={{ '--viewport-height': `${viewportHeight}px` } as React.CSSProperties}>
         <div className = { classNames( 'container', styles.container ) } >
            <Logo />
            <Button
               functionality = { () => console.log('language')}
               className= { styles.languageSwitcher }
            >
               <img
                  alt="United States"
                  src="https://icon-library.com/images/british-flag-icon/british-flag-icon-16.jpg"
                  className={ styles.flag }
               />
               {/* <FontAwesomeIcon 
                  icon = { faAngleDown } 
                  style = {{ marginLeft: '8px' }}
               /> */}
            </Button>
            <Button
               functionality = { handleMobileMenuOpen }
               className= { styles.mobileMenuBtn }
            >
               <FontAwesomeIcon 
                  icon = { faBars } 
               />
            </Button>
         </div>
      </header>
   );
}

export default Header;