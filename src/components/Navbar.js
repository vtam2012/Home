import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'

class NavBar extends Component {  
    render() {
        return (
            <nav className="nav">
                <div className="nav-brand"><a href="/">Vincent Tam</a></div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Skills</a>
                        </li>
                        <li>
                            <a href="/">Portfolio</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>         
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;