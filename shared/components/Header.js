import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () =>(
  <header className={styles.header}>
    <h1>
      Mi primera app con react
      <nav role="navigation">
        <Link to ="/">Home</Link>
        <a 
          href="https://platzi.com"
          target="_blank">
          Platzi
        </a>
      </nav>
    </h1>
  </header>
)

export default Header;