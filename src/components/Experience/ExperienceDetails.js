import React, {useState} from "react";
import 'animate.css'
import './index.scss'
import {Flex, Stack, Text, Heading, useMediaQuery, Button, Grid, GridItem} from '@chakra-ui/react'
import { animate, motion, useSpring } from "framer-motion"

function ExperienceDetails({targetedExperience, isShown, variants, isMobile }){
return (
    <motion.div 
     initial={{opacity: 0, scale: 1}} 
     animate={isShown ? 'open' : 'closed'} 
     variants={variants} 
     style={{
        background: 'rgba(255, 255, 255, .1)', 
        borderRadius: '.5em',
        width: isMobile ? '100%' : '100%'
     }}>
        <Flex fontSize={isMobile ? '12px' : '14px'} flexDir={'column'} p={5} gap={isMobile ? 2:5}>
                <Flex mb={2}>
                    {targetedExperience?.jobTitle === 'Math Teacher' ? 
                        <Flex>
                            <Text fontWeight={'bold'}>Math Teacher @</Text>
                        </Flex>
                    : 
                        <Flex flexDir={'column'} w={'100%'}>
                            <Flex gap={2} flexWrap={'wrap'} flexDirection={isMobile ? 'row' : 'row'}>
                            <Text fontWeight={'bold'}>
                                {targetedExperience?.jobTitle}
                            </Text>
                            <Text fontWeight={'bold'}> @ {targetedExperience?.company}</Text>
                            </Flex>
                            <Text alignSelf={'flex-end'}>{targetedExperience?.dates}</Text>
                        </Flex>
                    }
                </Flex>
        
                <Flex flexDir={'column'} flexWrap={'wrap'} gap={2} mt={isMobile ? 0:2}>
                {targetedExperience?.jobTitle === 'Math Teacher' ?  (null)
                :
                (<Flex flexDir={'column'}>
                    {targetedExperience?.details.map((detail) => {
                        return (
                            <Flex mb={isMobile ? 1: 2}>
                                <Text>
                                    {detail}
                                </Text>
                            </Flex>
                        )
                        })}
                </Flex>)}
            {targetedExperience?.jobTitle === 'Math Teacher' ?  (
                <Flex flexDir={'column'} mt={5}>
                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text>The Collegiate School</Text>
                        <Text>01/2020 - 06/2020</Text>
                    </Flex>

                    <Flex mb={5} mt={1} h={'2px'} w={'100%'} background={'rgba(255, 255, 255, .1)'}/>

                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text>Private Tutor</Text> 
                        <Text>09/2017 - 06/2022</Text>
                    </Flex>

                    <Flex mb={5} mt={1} h={'2px'} w={'100%'} background={'rgba(255, 255, 255, .1)'}/>

                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text>Home School Teacher</Text> 
                        <Text>09/2017 - 06/2018</Text>
                    </Flex>

                    <Flex mb={5} mt={1} h={'2px'} w={'100%'} background={'rgba(255, 255, 255, .1)'}/>

                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text>The Birch Wathen Lenox School</Text> 

                        <Text alignSelf={'flex-end'}>01/2017 - 06/2017</Text>
                    </Flex>

                    <Flex mb={5} mt={1} h={'2px'} w={'100%'} background={'rgba(255, 255, 255, .1)'}/>

                    <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text>Mathnasium</Text> 
                        <Text alignSelf={'flex-end'}>09/2016 - 07/2022</Text>
                    </Flex>
                    <Flex mt={1} h={'2px'} w={'100%'} background={'rgba(255, 255, 255, .1)'}/>
                </Flex>
                )
            : <Flex flexWrap={'wrap'} gap={2} mt={5}>
                    {targetedExperience?.skills.map((skill) => {
                return (
                    <Flex fontSize={isMobile ? 10 : 14} background={'rgba(255, 255, 255, .1)'} border w={'fit-content'} p={3} borderRadius={'.5em'}>
                        {skill}
                    </Flex>
                )
                })}
            </Flex>}
        </Flex>
    </Flex>
</motion.div>
)
} 

export default ExperienceDetails