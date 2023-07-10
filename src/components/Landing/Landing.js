import React from "react";
import landing from '../../images/blue-minimal.webp'
import { Flex, Stack, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";

function Landing({}){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    let height = window.screen.height

    function handleFontSize(tag) {
        if (tag === 'heading'){
            if (isMobile){
                return 20
            } else if(isDesktop){
                return 55
            } else {
                return 25
            }
        }

        if (tag === 'big-heading'){
            if (isMobile){
                return 35
            } else if(isDesktop){
                return 90
            } else {
                return 50
            }
        }

        if (tag === 'text'){
            if (isMobile){
                return 14
            } else if(isDesktop){
                return 35
            } else {
                return 20
            }
        }

    }

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
             top={isDesktop ? '250px' : '80px'}
             ml={isMobile ? 5 : 10}
             mr={5}
             mt={5}>
                <Flex>
                    <Heading mb={2} fontSize={handleFontSize('heading')}>Hi, my name is</Heading>
                </Flex>
                <Flex>
                    <Heading mb={2} fontSize={handleFontSize('big-heading')}>Dylan Toporek.</Heading>
                </Flex>
                
                <Flex>
                    <Text fontSize={handleFontSize('text')} w={isMobile ? '100%' : '65%'}>
                        I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                    </Text> 
                </Flex>
            </Flex>
            
        </Stack>
    )
}

export default Landing