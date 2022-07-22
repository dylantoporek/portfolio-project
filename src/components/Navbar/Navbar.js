import React from "react";
import { NavLink } from "react-router-dom";
import PageNav from "../PageNav/PageNav";
import '../Navbar/index.scss'
import logo from '../../images/logo.png'

function Navbar({selectedPage}){
    
    function handleClick(){
        const section = document.getElementById('home-container')
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } )
    }

    // function handleScrollToTop(){
    //     window.scrollTo(0, 0)
    // }

    // return (
    //     <div id='navbar-container'>
    //         {selectedPage === 'http://localhost:3000/' || selectedPage === 'https://dylantoporek.netlify.app/' ? 
    //         <NavLink id='selected-to-home' to='/' onClick={handleScrollToTop}>Home</NavLink>
    //         :
    //         <NavLink className='navLink' to='/' onClick={handleScrollToTop}>Home</NavLink>}
    //         {selectedPage === 'http://localhost:3000/portfolio' || selectedPage === 'https://dylantoporek.netlify.app/portfolio' ? 
    //         <NavLink id='selected-to-portfolio' to='/portfolio' onClick={handleScrollToTop}>Portfolio</NavLink>
    //         :
    //         <NavLink className='navLink' to='/portfolio' onClick={handleScrollToTop}>Portfolio</NavLink>}
    //         <a className="navLink" href='https://drive.google.com/file/d/1APNgek--JsLy05tjixRrRFtrf09HVQsY/view?usp=sharing'>Resume</a>
    //     </div>
    // )

    return (
        <div id='navbar-container'>
            <div>
                <img onClick={handleClick} style={{
                position: 'relative',
                left: '20px',
                width: '50px',
                cursor: 'pointer',
                zIndex: 10,
                }} src={logo}/>
            </div>
            <PageNav/>
        </div>
        
    )
}

export default Navbar