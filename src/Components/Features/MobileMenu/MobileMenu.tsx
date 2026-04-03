import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'Components/Commons/Button/Button';
import { setMobileMenuOpen } from 'store/modules/appReducer';
import { RootState } from 'store/configureReduxStore';
import Logo from 'Components/Commons/Logo/Logo';
import MenuAside from 'Components/Features/MenuAside/MenuAside';

import styles from './MobileMenu.module.scss';
import MenuRow from 'Components/Commons/MenuRow/MenuRow';

interface MobileMenuProps {
    className?: string;
}

function MobileMenu() { 
   const dispatch = useDispatch();
   const isMobileMenuOpen = useSelector((state: RootState) => state.app.isMobileMenuOpen);
   const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
   
   useEffect(() => {
      const handleResize = () => {
         setViewportHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);
   
   useEffect(() => {
      AOS.init({
         duration: 800,
         easing: 'ease-in-out',
         once: false,
      });
   }, []);

   useEffect(() => {
      if (isMobileMenuOpen) {
         AOS.refresh();
      }
   }, [isMobileMenuOpen]);

   const toggleMenu = () => {
      dispatch(setMobileMenuOpen(!isMobileMenuOpen));
   };
   if (!isMobileMenuOpen) {
      return null;
   }
   return (
        <div 
            className= { styles.menuOverlay }
            onClick={toggleMenu}
        >
            <div className={ styles.menuContent }
                data-aos="fade-left"
                style={{ '--menu-height': `${viewportHeight - 32}px` } as React.CSSProperties}
            >
                <div className={ styles.menuHeader }>
                    <Logo noAnimation />
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
                </div>
                <div className={ styles.menuMain }>
                    <MenuRow
                    icon={<FontAwesomeIcon color='#f7eef7' icon={['far', 'house']} />}
                    title="Follow Us" 
                    href="#Footer"
                    fullView={true}
                    />
                    <MenuRow
                    icon={<FontAwesomeIcon color='#f7eef7' icon={['far', 'envelope']} />}
                    title="Contact Us" 
                    href="#Footer"
                    fullView={true}
                    />
                    <MenuRow
                    icon={<FontAwesomeIcon color='#f7eef7' icon={['fas', 'info']} />}
                    title="About Us" 
                    href="#Footer"
                    fullView={true}
                    />
                </div>
                <div className={ styles.menuFooter }>
                    <p className={ styles.copyRight }>&copy; 2026 Gyumri State Symphony Orchestra</p>

                </div>
            </div>
        </div>
   );
}

export default MobileMenu;