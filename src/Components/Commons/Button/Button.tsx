import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
   children: string | React.ReactNode;
   functionality: () => void;
   isDisable?: boolean;
   className?: string;
}

function Button({ children, functionality, isDisable, className }: ButtonProps) {

   return (
      <button 
         disabled = { isDisable }
         className = { classNames( styles.btn, className )} 
         onClick = { functionality } 
      >{ children }</button>
   )
}

export default Button;