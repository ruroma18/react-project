import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <nav>
      <ul className={styles.navItemList}>
        <li><Link to="/" className={styles.navLink}>Home</Link></li>
        <li><Link to="/about" className={styles.navLink}>About</Link></li>
        <li><Link to="/contacts" className={styles.navLink}>Contacts</Link></li>
        <li><Link to="/register" className={styles.navLink}>Register</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
