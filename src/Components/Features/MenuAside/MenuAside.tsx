import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    faUser,
    faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import classNames from 'classnames';
import Button from 'Components/Commons/Button/Button';
import MenuRow from 'Components/Commons/MenuRow/MenuRow';

import styles from './MenuAside.module.scss';

const MenuAside: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  library.add( far );
  library.add( fas );
  library.add( fab );
  return (
    <aside
      className={classNames(styles.menuAside, { [styles.menuAsideIsHovered]: isHovered })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <MenuRow
          icon={<FontAwesomeIcon color='#fff' icon={['far', 'house']} />}
          title="Home" 
          fullView={isHovered}
        />
        <MenuRow
          icon={<FontAwesomeIcon color='#fff' icon={['far', 'envelope']} />}
          title="Contact Us" 
          fullView={isHovered}
        />
        <MenuRow
          icon={<FontAwesomeIcon color='#fff' icon={['fas', 'info']} />}
          title="About Us" 
          fullView={isHovered}
        />
    </aside>
  );
};

export default MenuAside;
