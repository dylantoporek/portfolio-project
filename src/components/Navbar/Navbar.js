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
    const navbarItems = ['Home', 'Projects', 'Experience', 'Contact']
    
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

        if (string === 'Home') {
            navigate('/')
        } else {
            let lowerCasePath = string.toLowerCase()
            navigate(`/${lowerCasePath}`)
        }
        
    }

    function handleNavbarItemText(string){

    let lowercaseString = string.toLowerCase()
       if(window.location.href.includes(lowercaseString)){
        return <Flex width={'10px'} h={'10px'} borderRadius={'50%'} backgroundColor={'black'}></Flex>
       } else if(string === 'Home' && window.location.href[window.location.href.length - 1] === '/'){
        return <Flex width={'10px'} h={'10px'} borderRadius={'50%'} backgroundColor={'black'}></Flex>
       } else return string
         
        // : 
        // string
    }
    
    return (
        <Stack>
            <Flex flexDir={'column'}>
                {navbarItems.map((item) => <Flex 
                    key={item}
                    cursor={'pointer'} 
                    mb={5} 
                    fontSize={12} 
                    fontWeight={700}
                    color={selectedNav === item ? '#0A81D1' : 'black'}
                    onMouseOver={(e) => setSelectedNav(e.target.innerText) }
                    onMouseOut={() => setSelectedNav(null)}
                    onClick={(e) => handleNavigate(`${e.target.innerText}`)}>
                        {handleNavbarItemText(item)}
                    </Flex>
                )}
            </Flex>
        </Stack>
        
    )
}

export default Navbar