import React from "react";
import '../About/index.scss'
import selfPhoto from '../../images/photo.jpeg'
import { Flex, Stack, Heading, Image, Text } from "@chakra-ui/react";

function About(){
    return (
        <Stack id='home-about'>
            <Heading className='section-title' id='about-title'>About me</Heading>
            <Flex id='home-about-container'>
                    
                <Flex id='home-about-text' flexDir={'column'}>
                    <Text className='about-text-blurb'>
                        I was born and raised in the Upper West Side of New York City. For my undergraduate studies, I attended UMass Amherst and graduated with a major in economics and a minor in philosophy. After graduation, I taught math to middle and high school students for a while before transitioning to software engineering.
                    </Text>
                    
                    <Text className='about-text-blurb'>
                    My interest in software engineering has always been there. Only recently, however, have I been able to pursue that interest. Flatiron School's software engineering program gave me the foundation I needed to begin my journey as a developer. During the course, I found satisfaction in learning how to build webpages from scratch, systematically resolving errors in my code, and being able utilize all aspects of creativity to shape my personal projects. 
                    </Text>
                
                    <Text className='about-text-blurb'>
                    Outside of work-related activities, my hobbies include playing games (which may be evident in my portfolio!), trying out new cooking recipes, hiking, and spending time with my dog, Lily.
                    </Text>
                </Flex>
                <Image src={selfPhoto}/>

            </Flex>
                  
        </Stack>
    )
}

export default About