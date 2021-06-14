/* import React, { Component } from 'react';
// import './navBar.scss';
import {navLinks} from '../../data/globalVars';

console.log('===>', navLinks);
export default class navBar extends Component {  
    render() {
      return (
        <nav className="navBar">
          <ul className="navBar__menu">
            navLinks && navLinks.map((linkEl) => {
                <li className="navBar__menu-item">
                    <a href="http://www.google.com">{linkEl.text}</a>
              </li>
            });  
          </ul>
        </nav>
      )
    }
  } */
import React, { Component } from 'react';
import './navBar.scss';
export default class navBar extends Component {  
    render() {
      return (
        <nav className="nav" >
            <ul className="nav__menu">
                <li className="nav__menu-item"><a>Home</a></li>
                <li className="nav__menu-item"><a>About</a>
                    <ul className="nav__submenu">
                        <li className="nav__submenu-item "><a>Our Company</a></li>
                        <li className="nav__submenu-item "><a>Our Team</a></li>
                        <li className="nav__submenu-item "><a>Our Portfolio</a></li>
                    </ul>
                </li>
            <li className="nav__menu-item"><a>Contact</a></li>
            </ul>
        </nav>
      )
    }
  }