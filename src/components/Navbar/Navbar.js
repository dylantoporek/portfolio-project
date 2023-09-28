import React, {useState} from "react";
import PageNav from "../PageNav/PageNav";
import logo from '../../images/logo.png'
import 'animate.css'
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import {Stack, Flex, Text, useMediaQuery} from '@chakra-ui/react'

function Navbar({toggleNavbar, setToggleNavbar}){
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


    let navbar = <Stack>
        <Flex 
        justifyContent={'space-between'}
         p={5}
         fontSize={'14px'}
         minH={'80px'}>
            <Flex 
             alignSelf={'center'}
             cursor={'pointer'}
             onClick={() => setToggleNavbar(false)}>
               <ArrowLeftIcon boxSize={3}/>
            </Flex>
            <Flex w={'60%'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Text cursor={'pointer'} onClick={() =>{    
                    handleNavigate('')
                    setToggleNavbar(false)
                }}>Home</Text>
                <Text cursor={'pointer'} onClick={() => {
                    handleNavigate('projects')
                    setToggleNavbar(false)
                }}>Projects</Text>
                <Text cursor={'pointer'} onClick={() => {
                    handleNavigate('experience')
                    setToggleNavbar(false)
                }}>Experience</Text>
            </Flex>  
        </Flex>
    </Stack>
    
    if (toggleNavbar){
        return (
            <Stack 
                w={isMobile ? '100%' : '30%'}
                zIndex={2}
                position={'absolute'} 
                top={'34px'} 
                left={0} 
                backgroundColor={'#1C61B1'} 
                className='animate__animated animate__slideInLeft'>
                {navbar}
            </Stack>
        
        )
    } else return (
        <Stack 
            w={isMobile ? '100%' : '30%'}
            zIndex={2}
            position={'absolute'} 
            top={'34px'}  
            left={0} 
            backgroundColor={'#1C61B1'} 
            className='animate__animated animate__slideOutLeft'>
            {navbar}
    </Stack>
    ) 
}

export default Navbar