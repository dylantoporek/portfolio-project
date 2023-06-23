import React from "react";
import mountains from '../../images/mountains1.png'
import { Flex, Stack, Heading, Text, Image } from "@chakra-ui/react";

function Landing({}){
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight

    // #landing-container{
    //     display: flex;
    //     min-width: 100%;
    //     max-width: 100%;
    //     top: 2%;
    //     position: absolute;
    //     background-image: url('../../images/mountains1.png');
    //     overflow: hidden;
    //     height: 700px;
    
    //     #intro-text{
    //         position: relative;
    //         padding-left: 10%;
    //         top: 15%;
    //         width: 80%;
    //         z-index: 1;
    
    //         h1{
    //             font-size: 55px;
    //         }
    //         h2{
    //             font-size: 25px;
    //         }
    //         p{
    //             font-size: 16px;
    //             width: 50%;
    //             text-align:left;
    //         }
    //     }
    // }
    return (
        <Stack 
         id='landing-container' 
         flexDir={'column'}
         position={'relative'}
         w={'100%'}
         mb={'1%'}
         zIndex={1}>
            <Image w={'100%'} position={'relative'} src={mountains}/>
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
                    <Text fontSize={16} w={'65%'}>
                        I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                    </Text> 
                </Flex>
            </Flex>
            
        </Stack>
    )
}

export default Landing