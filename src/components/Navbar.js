import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav className="nav">    
                <Link className="nav-brand" to='/'>Vincent Tam</Link>
                <ul className="links">
                    <Link className="item" to='/'>About</Link>
                    <Link className="item" to='/'>Skills</Link>
                    <Link className="item" to='/'>Contact</Link>
                    <Link className="item" to='/'>Portfolio</Link>
                    <Link className="item" to='/'>Resume</Link>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;
