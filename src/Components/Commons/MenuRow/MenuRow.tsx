import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuRow.module.scss';
import MenuListItemStyles from '../MenuListItem/MenuListItem.module.scss';
import Button from '../Button/Button';

type MenuRowProps = {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  fullView?: boolean;
  type?: string;
};

function MenuRow({ title, icon, fullView = true }: MenuRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menuAsideRow}>
      <div className={classNames(styles.menuAsideRowMain, { [styles.menuAsideRowMainOpen]: isOpen })} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.logo}>{icon}</div>
        <div className={classNames(styles.content, { [styles.displayFlex]: fullView })}>
          {title}
        </div>
      </div>
      {/* <div className={classNames(styles.menuAsideRowModal, { [styles.menuAsideRowModalOpen]: fullView && isOpen })} onClick={() => {}}>
        {children}
      </div> */}
    </div>
  );
}

export default MenuRow;
