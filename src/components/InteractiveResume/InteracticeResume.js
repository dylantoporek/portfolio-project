import React, {useState} from "react";
import 'animate.css'
import './index.scss'
import {Flex, Stack, Text, Heading, useMediaQuery, Button} from '@chakra-ui/react'

function InteractiveResume(){
    const [showExperienceDetails, setShowExperienceDetails] = useState('Rhabit Analytics')
    const [isShown, setIsShown] = useState('Rhabit Analytics');
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    let w = window.screen.width - 65
    const experienceDetails = [
        {
            company: 'Rhabit Analytics',
            jobTitle: 'Junior Software Engineer',
            details: [
                'Using Github, created new features, fixed bugs, and performed app maintenance',
                'Built new pages and components from scratch using React and Typescript, as well as updated existing code',
                'Wrote Cypress tests to reflect changes to the app and updated existing tests',
                'Implemented screen reader friendly code to allow for a better experience for visually impaired users',
                'Developed a Slackbot to send demo links either through slack or text message'
            ],
            dates: '09/2022 - 06/2023'
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
            num: 1,
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
            num: 2,
        },
        {
            company: 'Private Tutor & Home School Teacher',
            jobTitle: 'Tutor / Teacher',
            details: [
                'Offered academic support in various subjects',
                'Facilitated contact with school teachers and administration to ensure seamless schooling experience',
            ],
            dates: '09/2017 - Present',
            num: 3,
        },
        {
            company: 'Mathnasium',
            jobTitle: 'Instructor',
            details: [
                'Math instructor at after school mathematics instruction company',
                'Responsible for teaching a range of subjects, from addition to trigonometry',
                'Offer mentorship and motivation to students from a wide range of backgrounds',
            ],
            dates: '09/2016 - Present',
            num: 4,
        },
        {
            company: 'The Collegiate School',
            jobTitle: 'Part-Time Teacher',
            details: [
                'Math teacher of two 7th grade classes',
                'Prepared all course work, classroom activities, and assessments',
            ],
            dates: '01/2020 - 06/2020',
            num: 5,
        },
        {
            company: 'The Birch Wathen Lenox School',
            jobTitle: 'Assistant Teacher',
            details: [
                'Assistant math teacher / permanent substitute',
                'Assisted with four sections by crafting lessons, maintaining classroom order, and grading assignments',
            ],
            dates: '01/2017 - 06/2017',
            num: 6,
        }, 
    ]

    function handleResumeClick(e){
        if (showExperienceDetails !== e.target.innerText){
           let wasSelected = document.getElementById(`${showExperienceDetails}`)
           wasSelected.style.backgroundColor = 'aliceblue'
           wasSelected.style.color = 'black'
           e.target.style.backgroundColor = '#4B88A2'
           e.target.style.color = 'white'
           let details = document.getElementById('work-details-container')
           details.className = 'animate__animated animate__fadeOut animate__fast'

           let animationDirectionCheck = (wasSelected.value - e.target.value)
           
           setTimeout(()=>{
            setShowExperienceDetails(e.target.innerText)
            let newDetails = document.getElementById('work-details-container')
            if (animationDirectionCheck < 0){
                newDetails.className = 'animate__animated animate__fadeIn'
            } else {
                newDetails.className = 'animate__animated animate__fadeIn'
            }
           }, 350)
           
        } else {
           return null
        }
    }

    function handleResumeHover(e){
        setIsShown(e.target.id)
        if(showExperienceDetails === e.target.id){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = 'lightblue'
        }
        

    }

    function handleResumeLeave(e){
        if(showExperienceDetails === e.target.innerText){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = '#FFF9FB'
        }
    }

    function handleFontSizing(tag){
      if (tag === 'heading') {
        if(isDesktop){
            return 45
        } else if (isMobile){
            return 18
        } else return 20
      } else if (tag === 'details'){
        if(isDesktop){
            return 30
        } else if (isMobile){
            return 14
        } else return 16
      } else if (tag === 'dates'){
        if(isDesktop){
            return 30
        } else if (isMobile){
            return 14
        } else return 16
      }
        
    }

    const workButtonsDisplay = experienceDetails.map((experience)=>{ 
            return <Button 
            fontSize={isDesktop ? '20px' : undefined}
            cursor={'pointer'}
            mr={isMobile ? 5 : 0}
            minW={'fit-content'}
            p={5}
            h={isDesktop ? '100px':'50px'}
            key={experience.company}
            id={experience.company} 
            value={experience.num}
            onClick={handleResumeClick}
            onMouseEnter={handleResumeHover}
            onMouseLeave={handleResumeLeave}
            style={{
                backgroundColor: showExperienceDetails === experience.company ? '#4B88A2' : '#FFF9FB',
                color: showExperienceDetails === experience.company ? 'white' : 'black',
            }}>
                {experience.company}
            </Button>   
    })



    const targetedExperience = experienceDetails.find((experience) => {
        return experience.company === showExperienceDetails
    })


    const workDetailsDisplay = <Flex id='work-details-container'>
        <Flex flexDir={'column'} alignSelf={'flex-start'} p={10}>
            {targetedExperience.company === 'Flatiron School' ? 
            (<Heading id='work-title' fontSize={handleFontSizing('heading')}>
                {targetedExperience.jobTitle} @ {targetedExperience.company} Software Engineering Bootcamp
            </Heading>): (
                <Heading id='work-title' fontSize={handleFontSizing('heading')}>
                {targetedExperience.jobTitle} @ {targetedExperience.company}
            </Heading>
            )}
            <Text id="work-dates" fontSize={handleFontSizing('dates')} mt={2} mb={5}>{targetedExperience.dates}</Text>
            <Flex w={'100%'} flexDir={'column'} alignItems={'flex-start'} mt={10}>
                {targetedExperience.details.map((detail)=> <Text fontSize={handleFontSizing('details')} className="work-details">{detail}</Text>)}
            </Flex>
        </Flex>
    </Flex>

const gap = isDesktop ? 102.5: 52.5  
const start = 0  
const animatedDisplay =
    <div id='button-nav-animated'
        style={{
        position: 'absolute',
        width: '5px',
        height: '75%',
        borderRadius: '10px',
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",   
    }}> 
        <div className="scroll-section" style={{
            height: isDesktop ? '100px' : '50px',
            backgroundColor:'#061A40',
            top: 
            showExperienceDetails === 'Rhabit Analytics' ? start : null ||
            showExperienceDetails === 'Expedience Software' ? start + gap : null ||
            showExperienceDetails === 'Flatiron School' ? start + (2*gap) : null ||
            showExperienceDetails === 'Private Tutor & Home School Teacher' ? start + (3*gap) : null ||
            showExperienceDetails === 'Mathnasium' ? start + (4*gap) : null ||
            showExperienceDetails === 'The Collegiate School' ? start + (5*gap) : null ||
            showExperienceDetails === 'The Birch Wathen Lenox School' ? start + (6*gap) : null
        }}></div>              
    </div>

    return (
        <Stack
         id='home-experience'
         position={'relative'}
         width={'100%'}
         flexDirection={'column'}
         fontSize={20}
         alignSelf={'center'}
         p={5}
         mb={10}
         mt={isDesktop ? '100px' : 0}
          >
            <Flex
             p={5}
             position={'relative'}
             id='resume-container'
             fontWeight={'bold'}
             color={'black'}
             borderRadius={'4%'}
             flexDir={'column'}
             justifyItems={'center'}
             w={'100%'}>
                {/* <Heading id='experience-title' color={'#016BA6'} fontSize={35} py={2} mb={5}>
                    Experience
                </Heading> */}
                <Flex id='work-container' p={0} w={'100%'} mt={10} justifyContent={'center'} ml={isMobile ? 0:5} 
                    flexDirection={isMobile ? 'column':'row' }>


                    
                    {isMobile ? (
                        <Flex flexDir={'column'} maxW={w}>
                            <Heading id='experience-title' color={'#016BA6'} fontSize={35} py={2} mb={5}>
                                Experience
                            </Heading>
                            <Flex overflowX={'scroll'} scrollBehavior={'smooth'}>
                                {workButtonsDisplay}
                            </Flex>
                            <Flex id='work-details' p={10} backgroundColor={'#EBEBEB'} borderRadius={'.5em'}>
                                {workDetailsDisplay}
                            </Flex>
                        </Flex>

                    ) : (
                    <Flex w={isDesktop ? '71%' : '80%'} justifyContent={'center'} flexDir={'column'}>
                        <Heading id='experience-title' color={'#016BA6'} fontSize={isDesktop ? 60 : 35} py={2} mb={10}>
                             Experience
                        </Heading>
                        <Flex mt={10}>
                            <Flex w={'5px'} mr={isDesktop ? 10: 5}>
                            {animatedDisplay}
                            </Flex>
                                
                            <Flex id='experience-buttons-container' mr={isDesktop ? 10: 5} gap={1}>
                                {workButtonsDisplay}
                            </Flex>

                            <Flex id='work-details' p={isDesktop ? 16: 4} backgroundColor={'#EBEBEB'} borderRadius={'.5em'} maxH={isDesktop ? '730px':'360px'} w={'100%'}>
                                {workDetailsDisplay}
                            </Flex> 
                        </Flex> 
                    </Flex>
                    )}
                </Flex>
            </Flex>   
        </Stack>
    )
}

export default InteractiveResume