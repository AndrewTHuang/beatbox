import React from 'react';
import styles from '../styles/NavBar.scss';

export default class NavBar extends React.Component {
  render() {

    const navTitles = ['Home', 'How It Works', 'About', 'Contact', 'Sign Up'];

    const navElements = navTitles.map((title) => {
      const navItem = <li key={navTitles.indexOf(title)}><a href='#'> { title } </a></li>;
      return navItem;
    });

    return (
      <nav className='navbar'>
        <div className='navbar-beatbox'>
          <h1>Beat.box</h1>
        </div>
        <ul className='navbar-links-container'>
          { navElements }
        </ul>
      </nav>
    );
  }
}
