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
                'Andriod Development'
            ]
        },
        {
            company: 'Rhabit Analytics',
            jobTitle: 'Associate Software Engineer',
            details: [
                'Using Github, created new features, fixed bugs, and performed app maintenance',
                'Built new pages and components from scratch using React and Typescript, as well as updated existing code',
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
        open: { opacity: 1, },
        closed: { opacity: 0},
        
      }

      const spring = useSpring(1, { stiffness: 1000, damping: 10 })

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


    const experienceDetailsContainer = <motion.div initial={{opacity: 0, scale: 1}} animate={isShown ? 'open' : 'closed'} variants={variants}>
        <Flex fontSize={isMobile ? '12px' : '14px'} flexDir={'column'}>
        <Flex mb={2}>
            {targetedExperience?.jobTitle === 'Math Teacher' ? <Flex>
                <Text>Math Teacher @</Text>
            </Flex>: 
            <Flex flexDir={'column'}>
                <Text>
                    {targetedExperience?.jobTitle}
                </Text>
                <Text> @ {targetedExperience?.company}</Text>
                <Text>{targetedExperience?.dates}</Text>
            </Flex>}
        </Flex>
        <Flex flexDir={targetedExperience?.jobTitle === 'Math Teacher' ? 'column' : 'row'} flexWrap={'wrap'} gap={2} mt={2}>
            {targetedExperience?.jobTitle === 'Math Teacher' ?  (
                <Flex flexDir={'row'} flexWrap={'wrap'} gap={2}>
                    <Flex backgroundColor={'grey'} flexDir={isMobile ? 'row' : 'column'} border p={isMobile ? 2 : 5} borderRadius={'.5em'}>
                        <Text mr={isMobile ? 3:0}>The Collegiate School</Text> 
                        <Text>01/2020 - 06/2020</Text>
                    </Flex>
                    <Flex backgroundColor={'grey'} flexDir={'column'} border w={'fit-content'} p={isMobile ? 2 : 5}  borderRadius={'.5em'}>
                        <Text>Tutor</Text> 
                        <Text>09/2017 - 06/2022</Text>
                    </Flex>
                    <Flex backgroundColor={'grey'} flexDir={'column'} border w={'fit-content'} p={isMobile ? 2 : 5}  borderRadius={'.5em'}>
                        <Text>Home School Teacher</Text> 
                        <Text>09/2017 - 06/2018</Text>
                    </Flex>
                    <Flex backgroundColor={'grey'} flexDir={'column'} border w={'fit-content'} p={isMobile ? 2 : 5}  borderRadius={'.5em'}>
                        <Text>The Birch Wathen Lenox School</Text> 
                        <Text>01/2017 - 06/2017</Text>
                    </Flex>
                    <Flex backgroundColor={'grey'} flexDir={'column'} border w={'fit-content'} p={isMobile ? 2 : 5}  borderRadius={'.5em'}>
                        <Text>Mathnasium</Text> 
                        <Text>09/2016 - 07/2022</Text>
                    </Flex>
                </Flex>
                )
            : targetedExperience?.skills.map((skill) => {
                return (
                    <Flex backgroundColor={'grey'} border w={'fit-content'} p={3} borderRadius={'.5em'}>
                        {skill}
                    </Flex>
                )
            })}
        </Flex>
    </Flex>
</motion.div>

function findMyColor(string){
    if (string === 'GIVTme') {
        return '#1C61B1'
    }
    if (string === 'Rhabit Analytics') {
        return '#1D80AF'
    }
    if (string === 'Expedience Software') {
        return '#1EA9AC'
    }
    if (string === 'Flatiron School') {
        return '#67D89A'
    }
    if (string === 'Math Teacher') {
        return '#90EE90'
    }
}
    
    return ( 
        <motion.div 
        style={spring}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
            <Stack>
                <Flex
                flexDir={'column'} 
                alignSelf={'flex-start'}
                p={5}
                fontSize={isMobile ? '12px' : '14px'}
                fontWeight={300}
                maxW={'100%'}>
                    <Heading fontSize={isMobile ? 40:70} fontWeight={200} mb={4}>
                        Experience
                    </Heading>
                    <Flex 
                     ml={isMobile ? 0:3}
                     w={'75vw'}
                     flexDir={isMobile? 'column' : 'row'}>
                        <Flex h={'fit-content'} w={'100%'} flexDir={isMobile? 'column':'row'}>
                        {isMobile ? (
                            <Flex
                                background={'linear-gradient(to right,  #90EE90 0%, #67D89A 20%, #34BEA5 40%, #1EA9AC 60%, #1D80AF 80%, #1C61B1 100%)'} 
                                maxW={'100%'}
                                minH={'3px'}
                                borderRadius={'5em'}
                                marginRight={2}
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
                        
                        <Flex flexDir={isMobile ? 'row' : 'column'} ml={isMobile ? 2:5} gap={1} justifyContent={'space-evenly'}>
                                {isMobile ? experienceDetails.reverse().map((job, i) => {
                                    return (
                                        <motion.div
                                        animate={{rotate: isSmallMobile ?  -30 : 0, y: 0}}
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
                                position: 'relative',
                                cursor: 'pointer', 
                                marginLeft: isMobile ? '5%' : '15%',
                                top: isMobile ? 0 : '10%',
                            }}
                            dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
                            dragElastic={1}
                            drag
                            dragConstraints={{
                            top: 0,
                            left: 10,
                            right: 10,
                            bottom: 10,
                            }}>
                            <Flex ml={isMobile ? -5 : '15%'} w={isMobile ? '100%' : '30vw'} h={isMobile ? '100%' : '50vh'} mt={isMobile ? '20px' : 0} p={2} transition={'all ease-in .2s'}>
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