import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { 
   faArrowDown
} from '@fortawesome/free-solid-svg-icons';

import Button from 'Components/Commons/Button/Button';

import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
   className?: string; 
}

function LanguageSwitcher({ className }: LanguageSwitcherProps) {

   return(
      <div className = { classNames( styles.languageSwitcher, className )}>
         <Button
            functionality = { () => console.log('language')}
         >EN<FontAwesomeIcon icon = { faArrowDown } /></Button>
      </div>
   )
}

export default LanguageSwitcher;