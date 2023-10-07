import React, {useState, useEffect} from "react";
import PageNav from "../PageNav/PageNav";
import logo from '../../images/logo.png'
import 'animate.css'
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import {Stack, Flex, Text, useMediaQuery, Button} from '@chakra-ui/react'
import { motion } from "framer-motion"

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
            return 'rgba(255, 255, 255, .1)'
        } else if (url[url.length - 1] === '/' && string === 'Home'){
            return 'rgba(255, 255, 255, .1)'
        } else return 'transparent'  
    }

    function handleColorPicker(string){
        let url = window.location.href
        if (url.includes(string.toLowerCase())){
            return '#F7F7F9'
        } else if (url[url.length - 1] === '/' && string === 'Home'){
            return '#F7F7F9'
        } else return null  
    }

    if (isMobile){
        return (
            <Stack w={'100%'} p={4}>
                <Flex justifyContent={'flex-end'} gap={'10px'}>
                    {navbarItems.map((item) => {
                        return (
                            <Flex key={item + 'mobile'} borderRadius={'.5em'}>
                               <motion.div
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: checkURl(item), 
                                        p: 2 ,
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        borderRadius: '5em' ,
                                        color: handleColorPicker(item)
                                    }}
                                    key={item} 
                                    whileHover={{  bg: 'rgba(255, 255, 255, .1)', color: '#F7F7F9', scale: 1.1}}
                                    whileTap={{scale: .9}}  
                                    onClick={() => handleNavigate(item)}>
                                        <Text fontSize={'14px'}>
                                            {item}
                                        </Text>
                                </motion.div>
                            </Flex>
                        )
                    })}
                </Flex>  
            </Stack>
        )
    } else return (
        <Stack w={'100%'} p={4}>
                <Flex justifyContent={'flex-end'} mr={10} mt={5} gap={'20px'}>
                    {navbarItems.map((item) => {
                        return (
                            <Flex key={item}>
                                <motion.div
                                    style={{
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        backgroundColor: checkURl(item), 
                                        p: 2 ,
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        borderRadius: '5em' ,
                                        color: handleColorPicker(item)
                                    }}
                                    key={item} 
                                    whileHover={{  bg: 'rgba(255, 255, 255, .1)', color: '#F7F7F9', scale: 1.1}}
                                    whileTap={{scale: .9}}  
                                    onClick={() => handleNavigate(item)}>
                                        <Text fontSize={'16px'}>
                                            {item}
                                        </Text>
                                </motion.div>
                            </Flex>
                        )
                    })}
                </Flex>  
            </Stack>
    )
        
}

export default Navbar