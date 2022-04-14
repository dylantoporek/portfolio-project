import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({selectedPage}){
    

    function handleScrollToTop(){
        window.scrollTo(0, 0)
    }

    return (
        <div id='navbar-container'>
            {selectedPage === 'http://localhost:3000/' || selectedPage === 'https://dylantoporek.netlify.app/' ? 
            <NavLink id='selected-to-home' to='/' onClick={handleScrollToTop}>Home</NavLink>
            :
            <NavLink className='navLink' to='/' onClick={handleScrollToTop}>Home</NavLink>}
            {selectedPage === 'http://localhost:3000/portfolio' || selectedPage === 'https://dylantoporek.netlify.app/portfolio' ? 
            <NavLink id='selected-to-portfolio' to='/portfolio' onClick={handleScrollToTop}>Portfolio</NavLink>
            :
            <NavLink className='navLink' to='/portfolio' onClick={handleScrollToTop}>Portfolio</NavLink>}
            {selectedPage === 'http://localhost:3000/about' || selectedPage === 'https://dylantoporek.netlify.app/about' ?
            <NavLink id='selected-to-about' to='/about' onClick={handleScrollToTop}>About</NavLink>
            :
            <NavLink className='navLink' to='/about' onClick={handleScrollToTop}>About</NavLink>}
        </div>
    )
}

export default Navbar