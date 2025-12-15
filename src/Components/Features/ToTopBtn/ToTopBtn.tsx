import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';

import styles from './ToTopBtn.module.scss';

const ToTopBtn: React.FC = () => {
   const [isScrolled, setIsScrolled] = useState<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         if (!isScrolled && document.documentElement.scrollTop > 20) {
            setIsScrolled(true);
         } else if (isScrolled && document.documentElement.scrollTop < 20) {
            setIsScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, [isScrolled]);

   const goTop = () => {
      document.documentElement.scrollTop = 0;
   };
   console.log("isScrolled: ", isScrolled)
   if (!isScrolled) return null;

   return (
      <div 
         // data-aos="flip-right"
         onClick={goTop}
         className={styles.toTopBtn}
      >
         <FontAwesomeIcon icon={faUpLong}/>
      </div>
   );
}

export default ToTopBtn;
