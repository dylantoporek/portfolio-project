import React from "react";
import selfPhoto from '../../images/photo.jpeg'
import { Flex, Stack, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";

function About(){

    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")

    function handleImageSizing(){
        if(isMobile){
            return 200
        } else if (isDesktop){
            return 400
        } else return 300
    }

    return (
        <Stack
        mb={isMobile ? 10:0}
        p={5}
        id='home-about'
        position={'relative'}
        justifySelf={'center'}
        alignSelf={'center'}
        alignContent={'center'}
        width={'100%'}
        flexDirection={'column'}
        fontSize={'20px'}>
            <Flex flexDir={'column'} p={5} w={'100%'} mt={2} ml={5} mr={5}>
                <Flex
                    flexDir={isMobile ? 'column' : 'row'}
                    id='home-about-container'
                    position={'relative'}
                    width={'100%'}
                    margintop={'10%'}
                    mb={'5%'}
                    justifyContent={'center'}>

                    <Flex 
                    justifySelf={'center'}
                    id='home-about-text' 
                    flexDir={'column'}
                    width={isMobile ? '100%': '58%'}
                    fontSize={isDesktop ? '30px': '16px'}
                    paddingRight={isDesktop ? '6%' : '10%'}>
                            <Heading
                                paddingTop={'10px'}
                                py={8}
                                className='section-title' 
                                id='about-title'
                                position={'relative'}
                                fontSize={isDesktop ? '60px' : '35px'}
                                color={'#016BA6'}
                                marginBottom={8}>
                                About Me
                            </Heading>
                        <Text className='about-text-blurb'>
                            I was born and raised in the Upper West Side of New York City. For my undergraduate studies, I attended UMass Amherst and graduated with a major in economics and a minor in philosophy. After graduation, I taught math to middle and high school students for a while before transitioning to software engineering.
                        </Text>
                        <br></br>
                        <Text className='about-text-blurb'>
                        My interest in software engineering has always been there. Only recently, however, have I been able to pursue that interest. Flatiron School's software engineering program gave me the foundation I needed to begin my journey as a developer. During the course, I found satisfaction in learning how to build webpages from scratch, systematically resolving errors in my code, and being able utilize all aspects of creativity to shape my personal projects. 
                        </Text>
                        <br></br>
                        <Text className='about-text-blurb'>
                        Outside of work-related activities, my hobbies include playing games (which may be evident in my portfolio!), trying out new cooking recipes, hiking, and spending time with my dog, Lily.
                        </Text>
                    </Flex>
                    <Image
                     mt={isMobile ? 10 : 0}
                     h={handleImageSizing()}
                     w={handleImageSizing()}
                     alignSelf={'center'}
                     borderRadius={'50%'}
                     src={selfPhoto}/>
                </Flex>
            </Flex>       
        </Stack>
    )
}

export default About