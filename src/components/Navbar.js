import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){

    function handleScrollToTop(){
        window.scrollTo(0, 0)
    }

    return (
        <div id='navbar-container'>
            <NavLink className='navLink' to='/' onClick={handleScrollToTop}>Home</NavLink>
            <NavLink className='navLink' to='/portfolio' onClick={handleScrollToTop}>Portfolio</NavLink>
            <NavLink className='navLink' to='/about' onClick={handleScrollToTop}>About</NavLink>
        </div>
    )
}

export default Navbar