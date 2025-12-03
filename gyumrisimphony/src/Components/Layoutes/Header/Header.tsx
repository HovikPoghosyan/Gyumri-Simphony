import React from 'react';
import classNames from 'classnames';

import Logo from 'Components/Commons/Logo/Logo';
import LanguageSwitcher from 'Components/Features/LanguageSwitcher/LanguageSwitcher';

import styles from './Header.module.scss';

function Header() {  
   return (
      <header className = { styles.header }>
         <div className = { classNames( 'container', styles.container ) } >
            <Logo />
            <h1 className = { styles.title }>Gyumri State Symphony Orchestra</h1>
            <LanguageSwitcher />
         </div>
      </header>
   );
}

export default Header;