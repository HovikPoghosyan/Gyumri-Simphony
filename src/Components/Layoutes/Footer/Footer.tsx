import React from 'react';
import classNames from 'classnames';

import styles from './Footer.module.scss';

function Footer() {
   return (
      <footer className={ styles.footer }>
         <div className = { classNames( 'container', styles.container ) } >
            <div className={ styles.column }>
               <h4 className={ styles.title }>About Orchestra</h4>
               <p className={ styles.text }>
                  The Gyumri State Symphony Orchestra is one of Armenia's premier cultural institutions, bringing world-class classical music to audiences since 1924.
               </p>
            </div>
            <div className={ styles.column }>
               {/* <h4 className={ styles.title }>Quick Links</h4>
               <a href="#" className={ styles.text }>Concert Schedule</a>
               <a href="#" className={ styles.text }>Buy Tickets</a>
               <a href="#" className={ styles.text }>Support Us</a> */}
            </div>
            <div className={ styles.column }>
               <h4 className={ styles.title }>Contact Information</h4>
               <a href="#" className={ styles.text }>Gyumri, Armenia</a>
               <a href="#" className={ styles.text }>+374 (312) 3-45-67</a>
               <a href="#" className={ styles.text }>info@gyumriorch.am</a>
               <h4 className={ styles.title }>Follow Us</h4>
            </div>
         </div>
      </footer>
   );
}

export default Footer;