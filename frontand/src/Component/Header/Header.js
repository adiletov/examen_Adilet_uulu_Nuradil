import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">NEWS</NavLink>
            <NavLink to="/addNews">ADD NEWS</NavLink>
        </header>
    );
};

export default Header;