import React, {useState} from "react";
import 'animate.css'
import './index.scss'
import {Flex, Stack, Text, Heading, useMediaQuery, Button, Grid, GridItem} from '@chakra-ui/react'
import { animate, motion, useSpring } from "framer-motion"


function Experience(){
    const [showExperienceDetails, setShowExperienceDetails] = useState('')
    const [isShown, setIsShown] = useState(false);
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })

    const [isSmallMobile] = useMediaQuery("(max-width: 500px)", {
        ssr: true,
        fallback: false,
    })
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    let w = window.screen.width - 65
    const experienceDetails = [
        {
            company: 'GIVTme',
            jobTitle: 'Software Engineer',
            details: [
                'iOS development using Swift',
                'Android development using Kotlin',
                'Updated UI elements to create a more cohesive experience',
            ],
            dates: '08/2023 - Present',
            skills: [
                'Swift',
                'Kotlin',
                'Firebase',
                'iOS Development',
                'Android Development'
            ]
        },
        {
            company: 'Rhabit Analytics',
            jobTitle: 'Associate Software Engineer',
            details: [
                'Wrote Cypress tests to reflect changes to the app and updated existing tests',
                'Implemented screen reader friendly code to allow for a better experience for visually impaired users',
                'Developed a Slackbot to send demo links either through slack or text message'
            ],
            dates: '09/2022 - 06/2023',
            skills: [
                'React',
                'Typescript',
                'Ruby on Rails',
                'Apollo GraphQL',
                'SQL',
                'Full Stack Development'
            ]
        },
        {
            company: 'Expedience Software',
            jobTitle: 'Contractor',
            details: [
                'Assisted with updating RFP Inspection software',
                'React based development within Microsoft Office Addins',
                'Created custom explorations and reports with Google Analytics',
            ],
            dates: '04/2022 -  07/2022',
            skills: [
                'React',
                'Typescript',
                'Google Analytics'
            ]
        },
        {
            company: 'Flatiron School',
            jobTitle: 'Student',
            details: [
                'Full-Stack web application development, created with React and Ruby on Rails',
                "Studied Object-oriented programming, REST API's, and PostgreSQL databases",
                'Utilized Heroku and Netlify to deploy and test projects'
            ],
            dates: '09/2021 - 03/2022',
            skills: [
                'Full Stack Development',
                'React',
                'JavaScript',
                'Ruby on Rails',
                'OOP'
            ]
        },
        {
            company: 'Math Teacher',
            jobTitle: 'Math Teacher',
            details: [
                'The Collegiate School 01/2020 - 06/2020',
                'Home School Teacher / Private Tutor 09/2017 - 06/2022',
                'The Birch Wathen Lenox School 01/2017 - 06/2017',
                'Mathnasium 09/2016 - 07/2022',
            ],
            dates: '09/2016 - 06/2020',
            skills: [
                'Teaching',
                'Mathematics',
                'Leadership',
                'Organizaiton',
            ]
        },
    ]

    const variants = {
        open: { opacity: 1 },
        closed: { opacity: [1, 0], x: isMobile ? 0: -100, y: isMobile ? 0: 0},  
    }


    function handleResumeClick(e){
        if (showExperienceDetails !== e.target.innerText){
            setShowExperienceDetails(e.target.innerText)
            setIsShown(true)
        } else if (showExperienceDetails === e.target.innerText){
            setShowExperienceDetails('')
        } else return null
    }


    const targetedExperience = experienceDetails.find((experience) => {
        return experience.company === showExperienceDetails
    })


    const experienceDetailsContainer = <motion.div 
     initial={{opacity: 0, scale: 1}} 
     animate={isShown ? 'open' : 'closed'} 
     variants={variants} 
     style={{
        background: 'rgba(255, 255, 255, .1)', 
        borderRadius: '.5em',
        width: isMobile ? '100%' : '100%'
        }}>
        <Flex fontSize={isMobile ? '12px' : '14px'} flexDir={'column'} p={5}>
        
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
        
        <Flex flexDir={targetedExperience?.jobTitle === 'Math Teacher' ? 'column' : 'column'} flexWrap={'wrap'} gap={2} mt={2}>
        {targetedExperience?.jobTitle === 'Math Teacher' ?  (null)
        :
        (<Flex flexDir={'column'}>
            {targetedExperience?.details.map((detail) => {
                return (
                    <Flex mb={2}>
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
            : <Flex flexWrap={'wrap'} gap={2}>
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

    function findMyColor(string){
        if (string === 'GIVTme') {
            return '#1C61B1'
            // (28, 97, 177)
        }
        if (string === 'Rhabit Analytics') {
            return '#1D80AF'
            // 29 128 175
        }
        if (string === 'Expedience Software') {
            return '#1EA9AC'
            // 30 169 172
        }
        if (string === 'Flatiron School') {
            return '#67D89A'
            // 103 216 154
        }
        if (string === 'Math Teacher') {
            return '#90EE90'
            // 144 238 144
        }
    }
    
    return ( 
        <motion.div 
        style={{
        }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
            <Stack>
                <Flex
                flexDir={'column'} 
                alignSelf={'flex-start'}
                p={isMobile ? 1 : 5}
                fontSize={isMobile ? '12px' : '14px'}
                fontWeight={300}
                maxW={'100%'}>
                    <Heading fontSize={isMobile ? 40:70} fontWeight={200} mb={isMobile ? 0:7}>
                        Experience
                    </Heading>
                    <Flex
                     ml={isMobile ? 0:3}
                     flexDir={isMobile? 'column' : 'row'} w={'100%'} minW={'80vw'}>
                        <Flex h={'fit-content'} flexDir={isMobile? 'column':'row'}>
                        {isMobile ? (
                            <Flex
                                background={'linear-gradient(to right,  #90EE90 0%, #67D89A 20%, #34BEA5 40%, #1EA9AC 60%, #1D80AF 80%, #1C61B1 100%)'} 
                                minH={'3px'}
                                borderRadius={'5em'}
                                mt={2}
                                mb={5}>
                            </Flex>
                        ):(
                            <Flex
                                background={'linear-gradient(to top,  #90EE90 0%, #67D89A 20%, #34BEA5 40%, #1EA9AC 60%, #1D80AF 80%, #1C61B1 100%)'} 
                                minW={'3px'}
                                maxH={'100%'}
                                borderRadius={'5em'}
                                marginRight={2}
                                mt={2}
                                mb={2}>
                            </Flex>
                        )}
                        
                        <Flex 
                         flexDir={isMobile ? 'row' : 'column'} 
                         gap={1}
                         justifyContent={'space-between'}
                         w={isMobile ? '100%' : '150px'}
                         mr={5}>
                                {isMobile ? experienceDetails.reverse().map((job, i) => {
                                    return (
                                        <motion.div
                                        animate={{rotate: isSmallMobile ?  -30 : 0, y: 0, x: 0}}
                                        key={job.company} 
                                        onClick={(e) => {
                                            if (isShown){
                                                setIsShown(false)
                                                setTimeout(() => {
                                                    handleResumeClick(e)
                                                }, 200)
                                            } else handleResumeClick(e)
                                        }}
                                        whileHover={{scale: 1.2, x: isMobile ? 5:20, color: findMyColor(job.company)}}
                                        whileTap={{scale: 0.9}}>
                                            <Flex
                                            alignItems={'center'}
                                            cursor={'pointer'}
                                            p={2}
                                            >
                                                <Flex 
                                                    color={targetedExperience?.company === job.company ? findMyColor(job.company) : 'unset'} 
                                                    fontSize={isMobile ? '10px' : '14px'}>
                                                    {job.company}
                                                </Flex>
                                            </Flex>
                                        </motion.div> 
                                    )
                                }) 
                                :
                                experienceDetails.map((job, i) => {
                                    return (
                                        <motion.div
                                        animate={{rotate: isMobile ?  30 : 0}}
                                        key={job.company} 
                                        onClick={(e) => {
                                            if (isShown){
                                                setIsShown(false)
                                                setTimeout(() => {
                                                    handleResumeClick(e)
                                                }, 200)
                                            } else handleResumeClick(e)
                                        }}
                                        whileHover={{scale: 1.2, x: isMobile ? 5:20, color: findMyColor(job.company)}}
                                        whileTap={{scale: 0.9}}>
                                            <Flex
                                            alignItems={'center'}
                                            cursor={'pointer'}
                                            p={2}
                                            >
                                                <Flex 
                                                    color={targetedExperience?.company === job.company ? findMyColor(job.company) : 'unset'} 
                                                    fontSize={isMobile ? '10px' : '14px'}>
                                                    {job.company}
                                                </Flex>
                                            </Flex>
                                        </motion.div> 
                                    )
                                })}
                            </Flex>
                        </Flex>
                        <motion.div
                            style={{
                                marginLeft: isMobile ? 0: '10%',
                                cursor: 'pointer',
                                w: '100%',
                            }}
                            whileFocus={{opacity: 1}}
                            dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
                            dragElastic={1}
                            drag
                            dragConstraints={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            }}>
                            <Flex
                             w={isMobile ? '100%': '50vw'}
                             zIndex={10}
                             mt={isMobile ? '20px' : 0} 
                             p={2} 
                             transition={'all ease-in .2s'}>
                                {experienceDetailsContainer}
                            </Flex>
                        </motion.div>
                    </Flex>
                    
                </Flex>
            </Stack>
        </motion.div>   
    )
}

export default Experience