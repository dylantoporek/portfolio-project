import React from "react";
import landing from '../../images/blue-minimal.webp'
import { Flex, Stack, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";

function Landing({}){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })

    let height = window.screen.height
    return (
        <Stack 
         id='landing-container' 
         flexDir={'column'}
         position={'relative'}
         w={'100%'}
         mb={5}
         zIndex={1}>
            <Image h={isMobile ? height : null} position={'relative'} src={landing}/>
            <Flex
             id='intro-text' 
             flexDir={'column'} 
             zIndex={1} 
             position={'absolute'} 
             p={5} 
             top={'80px'}
             ml={5}
             mr={5}
             mt={5}>
                <Flex>
                    <Heading mb={2} fontSize={isMobile ? 20:25}>Hi, my name is</Heading>
                </Flex>
                <Flex>
                    <Heading mb={2} fontSize={isMobile ? 35:50}>Dylan Toporek.</Heading>
                </Flex>
                
                <Flex>
                    <Text fontSize={isMobile ? 14:20} w={isMobile ? '100%' : '65%'}>
                        I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                    </Text> 
                </Flex>
            </Flex>
            
        </Stack>
    )
}

export default Landing