import React, {useState} from "react";
import PageNav from "../PageNav/PageNav";
import logo from '../../images/logo.png'
import {Stack, Flex, Image, useMediaQuery} from '@chakra-ui/react'

function Navbar({selectedPage}){
    const [selectedNav, setSelectedNav] = useState(null)
    const [animation, setAnimation] = useState(false)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    
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
        <Stack
         flexDir={'row'}
         zIndex={'100'}
         position={'fixed'}
         top={0}
         maxW={'100%'}
         w={'100%'}
         height={'10%'}
         alignItems={'center'}
         backgroundColor={'#041A4D'}
         justifyContent={'space-between'}
         color={'white'}>
            <Flex ml={ isMobile ? 5 : '33px'}>
                <Image 
                 width={isDesktop ? '100px' : '50px'}
                 height={isDesktop ? '100px' : '50px'}
                 cursor={'pointer'} 
                 onClick={handleClick}
                 src={logo}/>
            </Flex>
            <Flex mr={5}>
                <PageNav 
                    animation={animation} 
                    handleAnimation={handleAnimation}
                    selectedNav={selectedNav}
                    handleNavSelection={handleNavSelection}
                />
            </Flex>
        </Stack>
        
    )
}

export default Navbar