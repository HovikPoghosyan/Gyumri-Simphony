import React from 'react';
import classNames from 'classnames';

import styles from './Logo.module.scss';

interface LogoProps {
   noAnimation?: boolean;
}

function Logo({ noAnimation = false }: LogoProps) {
   return (
      <div className = { classNames(styles.logo, { [styles.logoNoAnimation]: noAnimation }) }>
         <img 
            src="/Images/Logo/SLogo.png"
            alt = "GSSO"
            className = { classNames(styles.logoImg, { [styles.logoImgNoAnimation]: noAnimation }) } 
         />
      </div>
   );
}

export default Logo; 