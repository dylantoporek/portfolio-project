import React, {useState, useEffect} from "react";
import InteractiveResume from "../InteractiveResume/InteracticeResume";
import {useNavigate} from 'react-router-dom'
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'
import pO from '../../images/promise_object.gif'
import Skills from '../../components/Skills/Skills'
import '../Home/index.scss'
import Landing from '../Landing/Landing'
import About from "../About/About";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Flex, Stack, Text, Heading, useMediaQuery } from "@chakra-ui/react";


function Home({}){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    return (
        <Stack>
            <Flex 
             flexDir={'column'} 
             alignSelf={'center'}
             p={5}
             fontSize={14}
             maxW={'100%'}>
                <Heading fontSize={isMobile ? 40:70} mb={4}>
                    Welcome.
                </Heading>
                <Flex p={4} flexDir={'column'}>
                <Text mb={2}>
                    My name is Dylan Toporek and I am a fullstack enginner & developer based in Syracuse, New York. I taught math to middle and high school students for a several years before transitioning careers to software engineering.
                </Text>
                <Text mb={2}>
                    I am passionate about developing pixel perfect interfaces, intuitive UX, and well structured systems. 
                </Text>
                <Text>
                    Outside of work, my hobbies include playing games, cooking, hiking, and spending time with my dogs, Lily and Oaki.
                </Text>
                </Flex>
                
            </Flex>
        </Stack>
      );
}

export default Home