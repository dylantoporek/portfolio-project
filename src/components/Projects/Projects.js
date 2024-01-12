import React, {useState} from "react";
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'
import './index.scss'
import {Flex, Stack, Text, Image, Heading, Link, useMediaQuery, Button} from '@chakra-ui/react'
import { motion } from "framer-motion"
import CaptionCarousel from "../CaptionCarousel/CaptionCarousel";
import ProjectItems from "../ProjectItems/ProjectItems";


function Projects(){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    let w = window.screen.width - 65
    const [projects, setProjects] = useState([
       {
            title: 'Breath of the Wild Cooking App',
            image: botw,
            description: 'A cooking mini-game with an online shop. Buy ingredients and cook them!',
            goal: "The last project to make for the bootcamp was my capstone, an all encompassing app to show off all that I had learned. I wanted to make an e-commerce app, with a twist. I decided on this cooking app because it allowed me to merge e-commerce and gaming.",
            issue: 'After seeding my database with all of the recipe combinations, I quickly realized that certain dishes were not registering properly. The structure of the database was not matching the structure I had created in my front end application.',
            solution: 'By algorithmically reordering each combination from the front end before sending the request to check the database, I was able to get all the recipes to register properly.',
            link: 'https://obscure-scrubland-39099.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/botw-recipe-app', 
            backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
            stage: 'Development',
            num: 1,   
        }, 
        {
            title: 'Nintendo-Land',
            image: nintendo,
            description: 'A board game where you race to the finish against three computer opponents.',
            goal: "This would be my first full stack application built during my bootcamp. I wanted to make an original(ish) board game. Something simple enough where the logic would be managable, but something visually engaging at the same time.",
            issue: 'A major issue I ran into while building this project was the way the pieces moved around the board. At first, they would teleport around, which was not pleasant to look at. I tried to achieve a ‘life-like’ kind of movement to the piece, similar to someone picking up their piece and tapping it on each space of the board as they move.',
            solution: 'Using promise objects, and smooth transitions, I was able to make the pieces move in a much more pleasant way for users when playing the game.',
            link: 'https://frozen-eyrie-81829.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/Nintendo-Land', 
            backend: 'https://github.com/dylantoporek/Board-Game-Backend',
            stage: 'Development',
            num: 2,    
        },
        {
            title: 'Endurance Lactate Analyzer',
            image: lactate,
            description: 'A conceptual fitness app for althetes to track and measure their blood lactate levels while training.',
            goal: "This project was my first opportunity to work in a group during my bootcamp. As a group, we competed in the Flatiron sport innovation hack-a-thon. Our team consisted of three engineers, one data scientist, and one designer. We had one goal, to win!",
            issue: 'This project came together extremely smoothly given it was our first time working in a group. One issue we did have was finding the time to meet to discuss how to move forward solving certain layout issues, or small bugs.',
            solution: 'We each took the initiative to make sure each component we built was as close to the design mockup as possible to avoid any variations from component to component. We also made sure to test each feature thoroughly before deployment.',
            link: 'https://serene-spire-65012.herokuapp.com/',
            frontend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-client', 
            backend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-API',
            stage: 'Development',
            num: 3,
        },
        {
            title: 'Pokemon Minigame App',
            image: poke,
            description: 'A collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
            goal: "I began this project with the hopes of refining my newly acquired knowledge of Javascript and React. In addition, I wanted to bring some life to the games with animations.",
            issue: 'While creating the track minigame, I wanted to utilize a number indicating the speed of each pokemon to influence the animation speed which moved them across the screen. This was inhibiting the user experience while playing this minigame.',
            solution: 'Using a callback function within the animation itself, I was able to utilize any stat on a given pokemon that would directly change the duration of the animation. Fast pokemon now darted across the track, while slower ones took much longer to reach the finish.',
            link: 'https://tranquil-scrubland-82540.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/pokemon-mini-game-project', 
            backend: 'https://github.com/dylantoporek/pokemon-minigame-backend',
            stage: 'Development',
            num: 4,
        },
        
    ])


    return (
        <motion.div 
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        >
            <Stack>
                <Flex 
                flexDir={'column'} 
                p={isMobile ? 1 : 5}
                fontSize={14}
                fontWeight={300}
                maxW={'100%'}>
                    <Heading fontSize={isMobile ? 40:70} fontWeight={200} mb={isMobile ? 0:7} 
                    // transition={'all ease-in .1s'}
                    >
                        Projects
                    </Heading>
                    
                    <Flex ml={isMobile ? 0:0} flexDir={isMobile ? 'column':'row'}>
                        <ProjectItems/>
                    </Flex>
                </Flex>
            </Stack>
        </motion.div>
    );
}

export default Projects