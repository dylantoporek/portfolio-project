import React, {useState} from "react";
import PageNav from "../PageNav/PageNav";
import logo from '../../images/logo.png'

import { useNavigate } from "react-router-dom"
import {Stack, Flex, Text, useMediaQuery} from '@chakra-ui/react'

function Navbar({selectedPage}){
    const navigate = useNavigate()
    const [selectedNav, setSelectedNav] = useState(null)
    const [animation, setAnimation] = useState(false)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    const navbarItems = ['Home', 'Projects', 'Experience']
    
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

    function handleNavigate(string) {
      console.log(string)
        if (string === 'Home') {
            navigate('/')
        } else {
            let lowerCasePath = string.toLowerCase()
            navigate(`/${lowerCasePath}`)
        }
        
    }

    // <Flex>
    //             {navbarItems.map((item) => <Flex 
    //                 key={item}
    //                 cursor={'pointer'} 
    //                 mb={5} 
    //                 fontSize={12} 
    //                 fontWeight={700}
    //                 color={selectedNav === item ? '#41E2BA' : '#F7F7F9'}
    //                 onMouseOver={(e) => setSelectedNav(e.target.innerText) }
    //                 onMouseOut={() => setSelectedNav(null)}
    //                 onClick={(e) => handleNavigate(`${e.target.innerText}`)}>
    //                     {item} //
    //                 </Flex>
    //             )}
    //         </Flex>
    
    return (
        <Stack>
            {/* <Flex p={1}>
                <HamburgerIcon boxSize={8}/>
            </Flex> */}
        </Stack>
        
    )
}

export default Navbar