import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const NavStyle = {
        textDecoration: 'none',
    }
    return (
        <div className="header_">
            <NavLink to="/" style={NavStyle}>
                <span className="header_title">Movie Rank</span>
            </NavLink>
        </div>
    );
}

export default Header;