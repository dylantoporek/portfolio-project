import React, {useState} from "react";
import 'animate.css'
import './index.scss'
import {Flex, Stack, Text, Heading, useMediaQuery, Button, Grid, GridItem} from '@chakra-ui/react'
import { animate, motion, useSpring } from "framer-motion"
import ExperienceDetails from "./ExperienceDetails";


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
    const experienceDetails = [
        {
            company: 'SkySlope',
            jobTitle: 'Customer Support Technician',
            details: [
                    'Assisted real estate professionals with navigating SkySlope’s software, helping them efficiently complete transactions, upload documents, and manage workflows.',
                    "Collaborated with cross-functional teams, including product and engineering, to escalate and resolve complex customer concerns.",
                    "Created and managed Jira tickets for technical issues and feature requests, ensuring clear communication between customer support, product, and development teams to facilitate timely resolutions."
            ],
            dates: '07/2024 - Present',
            skills: [
                'Troubleshooting',
                'CRM Systems',
                'Problem-Solving',
                'Multitasking'
            ],
            url: 'https://skyslope.com/'
        },
        {
            company: 'Coconut Tree Software Inc',
            jobTitle: 'Contract Front End Engineer',
            details: [
                    'Developed responsive and interactive UI for online real estate market place, Bidmax, using React.',
                    "Delivered project in three months to meet customer's strict timeline.",
                    "Integrated the front end with companies existing backend services, enabling the company to launch the project on time."
            ],
            dates: '04/2024 - 07/2024',
            skills: [
                'React',
                'Javascript',
                'Front End Development',
            ],
            url: 'https://bidmax.com/ '
        },
        {
            company: 'GIVTme',
            jobTitle: 'Software Engineer',
            details: [
                    'Fixed stripe payment functionality to deliver correct gift amount to recipient, and transferring the stripe fee to the customer.',
                    'Development using Swift for iOS and Kotlin for Android for the front end and utilized Firebase for backend services to ensure real-time functionality and data security.'
            ],
            dates: '08/2023 - 07/2024',
            skills: [
                'Swift',
                'Kotlin',
                'Firebase',
                'iOS Development',
                'Android Development'
            ],
            url: 'https://givtme.com/ '
        },
        {
            company: 'Rhabit Analytics',
            jobTitle: 'Associate Software Engineer',
            details: [
                'Updated sales demo to showcase product advancements made by the company since developing the previous demo.',
                'Developed new product features with front end written in React, backend written in Ruby on Rails, and testing with Cypress.',
                'Enhanced accessibility with screen reader-friendly code for visually impaired users.',
                'Developed a Slackbot for sending demo links via Slack or text messages.'
            ],
            dates: '09/2022 - 06/2023',
            skills: [
                'React',
                'Typescript',
                'Ruby on Rails',
                'Apollo GraphQL',
                'SQL',
                'Full Stack Development'
            ],
            url: 'https://www.rhabitanalytics.com/'  
        },
        {
            company: 'Expedience Software',
            jobTitle: 'Contractor',
            details: [
                'Modified RFP automation software, written in React and Typescript, increasing its processing speed from google office documents.',
                'Upgraded application from Google Analytics 3 to use Google Analytics 4 in order to extract valuable data for reports.',
            ],
            dates: '04/2022 -  07/2022',
            skills: [
                'React',
                'Typescript',
                'Google Analytics'
            ],
            url: 'https://expediencesoftware.com/'  
        },
        {
            company: 'Flatiron School',
            jobTitle: 'Student',
            details: [
                'Full-Stack web application development, created with React and Ruby on Rails.',
                "Studied Object-oriented programming, REST API's, and PostgreSQL databases.",
                'Utilized Heroku and Netlify to deploy and test projects.'
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

    function findMyColor(string){
        if (string === 'SkySlope'){
            return '#1C61B1'
        }
        if (string === 'Coconut Tree Software Inc'){
            return '#1C61B1'
        }
        if (string === 'GIVTme') {
            return '#1D80AF'
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
        transition={{ duration: 0.3 }}>
            <Stack>
                <Flex
                flexDir={'column'} 
                alignSelf={'flex-start'}
                p={isMobile ? 1 : 5}
                fontSize={isMobile ? '14px' : '16px'}
                fontWeight={300}
                maxW={'100%'}>
                    <Heading fontSize={isMobile ? 40:70} fontWeight={200} mb={isMobile ? 0:7} 
                    // transition={'all ease-in .1s'}
                    >
                        Experience
                    </Heading>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: .5}}>
                    <Flex
                     ml={isMobile ? 0:0}
                     flexDir={isMobile? 'column' : 'row'} w={'100%'} minW={'80vw'}>
                        <Flex h={'fit-content'} flexDir={isMobile? 'column':'row'} fontSize={isMobile ? '14px' : '16px'}>
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
                         fontSize={isMobile ? '14px' : '16px'}
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
                                            fontSize={isMobile ? '14px' : '16px'}
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
                                            fontSize={isMobile ? '14px' : '16px'}
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
                        {showExperienceDetails !== '' ?
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
                             mt={isMobile ? '15px' : 0} 
                             p={2} 
                             transition={'all ease-in .2s'}>
                                <ExperienceDetails targetedExperience={targetedExperience} isShown={isShown} variants={variants} isMobile={isMobile}/>
                            </Flex>
                        </motion.div> : null
                        }
                    </Flex>
                    </motion.div>
                    
                </Flex>
            </Stack>
        </motion.div>   
    )
}

export default Experience