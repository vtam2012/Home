import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'

const NavBar = (props) => {
    
    return (
        <nav className="nav">
            <Link className="nav-link" to='/'>Vincent Tam</Link>
            <Link className="nav-link" to='/'>About</Link>
            <Link className="nav-link" to='/'>Skills</Link>
            <Link className="nav-link" to='/'>Contact</Link>
            <Link className="nav-link" to='/'>Portfolio</Link>
        </nav>
    );
}

export default NavBar;
