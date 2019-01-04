import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbar.scss'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }

    componentDidMount() {
        const elem = document.querySelector('nav');
        this.setState({top: elem.offsetTop, height: elem.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
    render() {
        return (
            <React.Fragment>
                <nav className={this.state.scroll > this.state.top ? 'fixed-nav nav' : 'nav'}>    
                    <Link className="nav-brand" to="/#Header"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                        Vincent Tam
                    </Link>
                    <ul className="links">
                        <Link className="item" to="/#About"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                            About
                        </Link>
                        <Link className="item" to="/#Skills"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                            Skills
                        </Link>
                        <Link className="item" to="/#Portfolio"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                            Portfolio
                        </Link>
                        <Link className="item" to="/#Contact"
                            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
                            Contact
                        </Link>

                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;