import React, { Component } from 'react';
import NavBar from '../Navbar/navBar';
import './header.scss';

export default class header extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="header__wrapper">
                    <header className="header">
                        <div className="header__logo">
                            {/* <img src="/images/images.jpeg" className="header__logo-image" alt="logo"></img> */}
                            Logo
                        </div>
                        <div className="header__document-link">
                            <a href='www.google.com'>Documentation</a>
                        </div>
                    </header>
                    <NavBar />
                </div>    
            </React.Fragment>
        );
    }
}