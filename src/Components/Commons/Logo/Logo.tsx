import React from 'react';

import styles from './Logo.module.scss';

function Logo() {
   return (
      <div className = { styles.logo }>
         <img 
            src="/Images/Logo/LogoIcon.svg"
            alt = "GSSO"
            className = { styles.logoImg } 
         />
      </div>
   );
}

export default Logo; 