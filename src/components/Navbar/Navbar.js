import React, {useState, useEffect} from "react";
import PageNav from "../PageNav/PageNav";
import logo from '../../images/logo.png'
import 'animate.css'
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import {Stack, Flex, Text, useMediaQuery, Button, Image} from '@chakra-ui/react'
import { motion } from "framer-motion"

function Navbar({animation, setAnimation}){
    const navigate = useNavigate()

    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    const navbarItems = ['Home', 'Projects', 'Experience']

    // useEffect(() => {
    //     if (animation){
    //         setTimeout(() => {
    //             setAnimation(false)
    //         }, 10000)
    //     }
    // }, [animation])

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

    const variants = {
        on: {
            transition: {
                ease: "linear",
                duration: 60,
                x: { duration: 60 },
                y: {duration: 60}
            },
            opacity: isMobile ? [1, .5, 0, .5, 0, .5, 0, .5, 1 ] : [1, .5, 0, .5, 0, .5, 0, .5, 1, 0, 0, .5, 1, 0, 1] , 
            x: isMobile ? 
                [0, 5, 15, 5, 200, 300, 310, 250, 10, 0]
                :
                [0, 5, 15, 5, 200, 300, 310, 500, 700, 1050, 750, 600, 400, 100, 0], 

            y: isMobile ? 
                [0, 150, 400, 500, 550, 530, 550, 100, 20, 0]
            : 
                [0, 150, 400, 500, 550, 530, 550, 600, 700, 400, 200, 50, 10, 5, 0],
        }, 
        off: {
            opacity: [1]
        }
    }

    if (isMobile){
        return (
            <Stack w={'100%'} p={4} flexDir={'row'} justifyContent={'space-between'}>
                <motion.div
             animate={animation ? 'on' : 'off'}
             variants={variants}>
                <Image
                 cursor={'pointer'}
                 onClick={() => setAnimation(!animation)} 
                 src={'./ghost.svg'} 
                 maxW={'40px'}/>
            </motion.div>
                <Flex justifyContent={'flex-end'} alignSelf={'center'} gap={'10px'}>
                    {navbarItems.map((item) => {
                        return (
                            <Flex key={item + 'mobile'} borderRadius={'.5em'}>
                               <motion.div
                                    style={{
                                        display: 'flex',
                                        cursor: 'pointer',
                                        backgroundColor: checkURl(item), 
                                        p: 2 ,
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        borderRadius: '5em' ,
                                        maxHeight: '30px',
                                        color: handleColorPicker(item)
                                    }}
                                    key={item} 
                                    whileHover={{  bg: 'rgba(255, 255, 255, .1)', color: '#F7F7F9', scale: 1.1}}
                                    whileTap={{scale: .9}}  
                                    onClick={() => handleNavigate(item)}>
                                        <Text fontSize={'14px'} alignSelf={'center'}>
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
        <Stack w={'100%'} p={4} flexDir={'row'} justifyContent={'space-between'}>
            <motion.div
             animate={animation ? 'on' : 'off'}
             onAnimationEnd={() => setAnimation(false)}
             variants={variants}>
                <Image
                 cursor={'pointer'}
                 onClick={() => setAnimation(!animation)} 
                 src={'./ghost.svg'} 
                 maxW={'50px'}/>
            </motion.div>
                <Flex justifyContent={'flex-end'} alignSelf={'center'} mr={10} mt={5} gap={'20px'}>
                    {navbarItems.map((item) => {
                        return (
                            <Flex key={item}>
                                <motion.div
                                    style={{
                                        display: 'flex',
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        backgroundColor: checkURl(item), 
                                        p: 2 ,
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        borderRadius: '5em' ,
                                        maxHeight: '40px',
                                        color: handleColorPicker(item)
                                    }}
                                    key={item} 
                                    whileHover={{  bg: 'rgba(255, 255, 255, .1)', color: '#F7F7F9', scale: 1.1}}
                                    whileTap={{scale: .9}}  
                                    onClick={() => handleNavigate(item)}>
                                        <Text fontSize={'16px'} alignSelf={'center'}>
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