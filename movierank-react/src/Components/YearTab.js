import React from 'react';
import './YearTab.css';
import { NavLink } from 'react-router-dom';

function YearTab() {
    const NavStyle = ({ isActive }) =>
    ({
        fontFamily: 'Jua',
        textDecoration: 'none',
        padding: '12px 15px 10px',
        color: '#232323',
        fontSize: '30px',
        backgroundColor: isActive ? '#c9c9c9' : '#717171',
        border: '3px solid #c9c9c9',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    })

    return (
        <div className="yeartab_div">
            <NavLink to="/" style={NavStyle}>Home</NavLink>
            <NavLink to="/2021" style={NavStyle}>2021</NavLink>
            <NavLink to="/2020" style={NavStyle}>2020</NavLink>
            <NavLink to="/2019" style={NavStyle}>2019</NavLink>
            <NavLink to="/2018" style={NavStyle}>2018</NavLink>
            <NavLink to="/2017" style={NavStyle}>2017</NavLink>
            <NavLink to="/2016" style={NavStyle}>2016</NavLink>
            <NavLink to="/2015" style={NavStyle}>2015</NavLink>
            <NavLink to="/2014" style={NavStyle}>2014</NavLink>
            <NavLink to="/2013" style={NavStyle}>2013</NavLink>
            <NavLink to="/2012" style={NavStyle}>2012</NavLink>
        </div>
    );
}
export default YearTab;