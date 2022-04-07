import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <div id='navbar-container'>
            <NavLink className='navLink' to='/'>Home</NavLink>
            <NavLink className='navLink' to='/portfolio'>Portfolio</NavLink>
            <NavLink className='navLink' to='/blog'>Blog</NavLink>
            <NavLink className='navLink' to='/about'>About</NavLink>
        </div>
    )
}

export default Navbar