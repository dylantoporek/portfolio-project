import React, {useState} from "react";
import PageNav from "../PageNav/PageNav";
import logo from '../../images/logo.png'
import {Stack, Flex, Image} from '@chakra-ui/react'

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
        <Stack
         flexDir={'row'}
         zIndex={'100'}
         position={'fixed'}
         width={"100%"}
         height={'10%'}
         alignItems={'center'}
         backgroundColor={'#4B88A2'}
         justifyContent={'space-between'}
         color={'white'}>
            <Flex ml={5}>
                <Image width={'50px'} height={'50px'} cursor={'pointer'} onClick={handleClick} src={logo}/>
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