import React, {useState, useEffect} from "react";
import PageNav from "../PageNav/PageNav";
import logo from '../../images/logo.png'
import 'animate.css'
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import {Stack, Flex, Text, useMediaQuery, Button} from '@chakra-ui/react'

function Navbar({toggleNavbar, setToggleNavbar}){
    const navigate = useNavigate()
    const [animation, setAnimation] = useState(false)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    const navbarItems = ['Home', 'Projects', 'Experience']

    function handleNavigate(string) {
        if (string === 'Home') {
            navigate('/')
        } else {
            let lowerCasePath = string.toLowerCase()
            navigate(`/${lowerCasePath}`)
        }  
    }

    function checkURl(string){
        let url = window.location.href
        if (url.includes(string.toLowerCase())){
            return '#90EE90'
        } else if (url[url.length - 1] === '/' && string === 'Home'){
            return '#90EE90'
        } else return 'transparent'  
    }

    function handleColorPicker(string){
        let url = window.location.href
        if (url.includes(string.toLowerCase())){
            return 'black'
        } else if (url[url.length - 1] === '/' && string === 'Home'){
            return 'black'
        } else return null  
    }

    if (isMobile){
        return (
            <Stack w={'100%'} p={4}>
                <Flex justifyContent={'flex-end'} gap={'10px'}>
                    {navbarItems.map((item) => {
                        return (
                            <Flex>
                                <Button cursor={'pointer'} key={item} _hover={{ bg: '#90EE90', color: 'black'}} backgroundColor={() => checkURl(item)} p={2} paddingLeft={'10px'} paddingRight={'10px'} borderRadius={'5em'} color={() => handleColorPicker(item)} onClick={() => handleNavigate(item)}>
                                    {item}
                                </Button>
                            </Flex>
                        )
                    })}
                </Flex>  
            </Stack>
        )
    } else return (
        <Stack w={'100%'} p={4}>
                <Flex justifyContent={'flex-end'} mr={10} mt={5} gap={'10px'} fontSize={'14px'}>
                    {navbarItems.map((item) => {
                        return (
                            <Flex>
                                <Button cursor={'pointer'} key={item} _hover={{ bg: '#90EE90', color: 'black'}} backgroundColor={() => checkURl(item)} p={2} paddingLeft={'10px'} paddingRight={'10px'} borderRadius={'5em'} color={() => handleColorPicker(item)} onClick={() => handleNavigate(item)}>
                                    {item}
                                </Button>
                            </Flex>
                        )
                    })}
                </Flex>  
            </Stack>
    )
        
}

export default Navbar