import React from 'react';
import classNames from 'classnames';
import LocationIcon from 'assets/Icons/LocationIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
   faLocationDot,
   faPhone,
   faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

function Footer() {
   return (
      <footer className={ styles.footer }>
         <div className = { classNames( 'container', styles.container ) } >
            <div className={ styles.column }>
               <h4 className={ styles.title }>About Orchestra</h4>
               <p className={ styles.text }>
                  Gyumri State Symphony Orchestra was founded in the years after the earthquake in 1990 and received state status in 1993. 
               </p>
            </div>
            <div className={ styles.column }>
                  <div className={ styles.columnContent}>
                     <h4 className={ styles.title }>Contact Information</h4>
                     <a href="https://maps.app.goo.gl/1MEzhMCbg5sGL4cx5" target="_blank" className={ styles.infoRow }><FontAwesomeIcon className={ styles.infoFaIcon } icon = { faLocationDot }/><span className={ styles.text }>Gyumri, Armenia</span></a>
                     <a href="tel:+37493117232" className={ styles.infoRow }><FontAwesomeIcon className={ styles.infoFaIcon } icon = { faPhone }/><span className={ styles.text }>+374 (93) 11-72-32</span></a>
                     <a href="mailto:gyumrisymphony@gmail.com" className={ styles.infoRow }><FontAwesomeIcon className={ styles.infoFaIcon } icon = { faEnvelope }/><span className={ styles.text }>gyumrisymphony@gmail.com</span></a>             
                  </div>
            </div>
            <div className={ styles.column }>
                  <div className={ styles.columnContent}>
                     <h4 className={ styles.title }>Follow Us</h4>
                     <a href="https://www.instagram.com/gyumri.symphony/" target="_blank" className={ styles.infoRow }><FontAwesomeIcon className={ styles.infoFaIcon } icon = { ['fab', 'instagram' ] }/><span className={ styles.text }>@gyumri.symphony</span></a>
                     <a href='https://www.youtube.com/@gyumristatesymphonyorchestra' target="_blank" className={ styles.infoRow }><FontAwesomeIcon className={ styles.infoFaIcon } icon = { ['fab', 'youtube' ] }/><span className={ styles.text }>@gsso</span></a>   
                     <a href='https://www.facebook.com/gyumrisso' target="_blank" className={ styles.infoRow }><FontAwesomeIcon className={ styles.infoFaIcon } icon = { ['fab', 'facebook' ] }/><span className={ styles.text }>@gyumrisso</span></a>                       
                  </div>
            </div>
            <p className={ styles.copyRight }>&copy; 2025 Gyumri State Symphony Orchestra. All rights reserved.</p>
         </div>
      </footer>
   );
}

export default Footer;