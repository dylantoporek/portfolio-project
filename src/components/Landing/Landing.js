import React from "react";
import mountains from '../../images/mountains1.png'
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";

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
        <Stack id='landing-container' flexDir={'column'}> 
            <Flex id='intro-text' flexDir={'column'}>
                <Heading>Hi, my name is</Heading>
                <Heading>Dylan Toporek</Heading>
                <Text>
                    I am a fullstack software engineer focusing on developing and designing exceptional web experiences. Currently, I am honing my skills using React and Ruby on Rails.
                </Text> 
            </Flex>
        </Stack>
    )
}

export default Landing