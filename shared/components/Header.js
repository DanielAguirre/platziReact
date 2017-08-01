import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () =>(
  <header  className="header">
    <h1 className="title">
      Mi primera app con react
    </h1>
      <nav role="navigation">
        <Link to ="/" className="link">Home</Link>
        <a 
          href="https://platzi.com"
          target="_blank"
          className="link">
          Platzi
        </a>
      </nav>
  </header>
)

export default Header;