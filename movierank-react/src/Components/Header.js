import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const NavStyle = {
        textDecoration: 'none',
    }
    return (
        <div className="header_div">
            <NavLink to="/" style={NavStyle}>
                <span className="header_title">MOVIE RANK</span>
            </NavLink>
        </div>
    );
}

export default Header;