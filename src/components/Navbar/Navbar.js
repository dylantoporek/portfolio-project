import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import PageNav from "../PageNav/PageNav";
import '../Navbar/index.scss'
import logo from '../../images/logo.png'

function Navbar({selectedPage}){
    const [selectedNav, setSelectedNav] = useState(null)
    const [animation, setAnimation] = useState(false)
    
    function handleClick(){
        const section = document.getElementById('home-container')
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } )
        setSelectedNav(null)
    }

    function handleNavSelection(props){
        setSelectedNav(props)
    }

    function handleAnimation(props){
        if(props === 'on'){
            setAnimation(true)
        } else {
            setAnimation(false)
        }
    }


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
            <PageNav 
            animation={animation} 
            handleAnimation={handleAnimation}
            selectedNav={selectedNav}
            handleNavSelection={handleNavSelection}/>
        </div>
        
    )
}

export default Navbar