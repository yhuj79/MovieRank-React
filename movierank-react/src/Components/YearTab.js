import React from 'react';
import { NavLink } from 'react-router-dom';

function YearTab() {
    return (
        <div>
            <p><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>Home</NavLink></p>
            <p><NavLink to="/2021" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>2021</NavLink></p>
            <p><NavLink to="/2020" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>2020</NavLink></p>
        </div>
    );
}
export default YearTab;