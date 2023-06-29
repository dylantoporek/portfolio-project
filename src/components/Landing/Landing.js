import React from "react";
import landing from '../../images/blue-minimal.webp'
import { Flex, Stack, Heading, Text, Image } from "@chakra-ui/react";

function Landing({}){
    return (
        <Stack 
         id='landing-container' 
         flexDir={'column'}
         position={'relative'}
         w={'100%'}
         mb={'1%'}
         zIndex={1}>
            <Image position={'relative'} src={landing}/>
            <Flex
             id='intro-text' 
             flexDir={'column'} 
             zIndex={1} 
             position={'absolute'} 
             p={5} 
             top={'80px'}
             ml={10} 
             mt={5}>
                <Flex>
                    <Heading mb={2} fontSize={25}>Hi, my name is</Heading>
                </Flex>
                <Flex>
                    <Heading mb={2} fontSize={50}>Dylan Toporek.</Heading>
                </Flex>
                
                <Flex>
                    <Text fontSize={20} w={'65%'}>
                        I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                    </Text> 
                </Flex>
            </Flex>
            
        </Stack>
    )
}

export default Landing