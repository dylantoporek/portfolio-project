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
import { Flex, Stack, Heading } from "@chakra-ui/react";


function Home({}){
    return (
        <Stack 
            id='home-container'
            position={'relative'}
            flexDirection={'column'}
            width={'100%'}
            height={'100%'}
            top={'0%'}
            backgroundColor={'#FFF9FB'}>
            
            <Landing/>
            {/* <About/>
            <InteractiveResume/>
            <ProjectItem /> */}

            
            {/* <div id='home-skills'>
            <h3>Skills</h3>
                <Skills/>
            </div> */}
            
        </Stack>
      );
}

export default Home