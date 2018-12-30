import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbar.scss'

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="nav">    
                <Link className="nav-brand" to="/#one"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                    Vincent Tam
                </Link>
                <ul className="links">
                    <Link className="item" to="/#two"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                        About
                    </Link>
                    <Link className="item" to="/#three"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                        Skills
                    </Link>
                    <Link className="item" to="/#four"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                        Contact
                    </Link>
                    <Link className="item" to="/#five"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                        Portfolio
                    </Link>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;
