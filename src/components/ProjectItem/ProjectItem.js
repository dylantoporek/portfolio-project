import React, {useState} from "react";
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'
import '../ProjectItem/index.scss'
import {Flex, Stack, Text, Image, Heading, Link, useMediaQuery, Button} from '@chakra-ui/react'


function ProjectItem(){
    const [showProjectDetails, setShowProjectDetails] = useState('Breath of the Wild Cooking App')
    const [isShown, setIsShown] = useState('Breath of the Wild Cooking App');
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [isDesktop] = useMediaQuery("(min-width: 1550px)")
    let w = window.screen.width - 65
    const [projects, setProjects] = useState([
       {
            title: 'Breath of the Wild Cooking App',
            image: botw,
            description: 'A cooking mini-game with an online shop. Buy ingredients and cook them!',
            goal: "The last project to make for the bootcamp was my capstone, an all encompassing app to show off all that I had learned. I wanted to make an e-commerce app, with a twist. I decided on this cooking app because it allowed me to merge e-commerce and gaming.",
            issue: 'After seeding my database with all of the recipe combinations, I quickly realized that certain dishes were not registering properly. The structure of the database was not matching the structure I had created in my front end application.',
            solution: 'By algorithmically reordering each combination from the front end before sending the request to check the database, I was able to get all the recipes to register properly.',
            link: 'https://obscure-scrubland-39099.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/botw-recipe-app', 
            backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
            stage: 'Development',
            num: 1,   
        }, 
        {
            title: 'Nintendo-Land',
            image: nintendo,
            description: 'A board game where you race to the finish against three computer opponents.',
            goal: "This would be my first full stack application built during my bootcamp. I wanted to make an original(ish) board game. Something simple enough where the logic would be managable, but something visually engaging at the same time.",
            issue: 'A major issue I ran into while building this project was the way the pieces moved around the board. At first, they would teleport around, which was not pleasant to look at. I tried to achieve a ‘life-like’ kind of movement to the piece, similar to someone picking up their piece and tapping it on each space of the board as they move.',
            solution: 'Using promise objects, and smooth transitions, I was able to make the pieces move in a much more pleasant way for users when playing the game.',
            link: 'https://frozen-eyrie-81829.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/Nintendo-Land', 
            backend: 'https://github.com/dylantoporek/Board-Game-Backend',
            stage: 'Development',
            num: 2,    
        },
        {
            title: 'Endurance Lactate Analyzer',
            image: lactate,
            description: 'A conceptual fitness app for althetes to track and measure their blood lactate levels while training.',
            goal: "This project was my first opportunity to work in a group during my bootcamp. As a group, we competed in the Flatiron sport innovation hack-a-thon. Our team consisted of three engineers, one data scientist, and one designer. We had one goal, to win!",
            issue: 'This project came together extremely smoothly given it was our first time working in a group. One issue we did have was finding the time to meet to discuss how to move forward solving certain layout issues, or small bugs.',
            solution: 'We each took the initiative to make sure each component we built was as close to the design mockup as possible to avoid any variations from component to component. We also made sure to test each feature thoroughly before deployment.',
            link: 'https://serene-spire-65012.herokuapp.com/',
            frontend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-client', 
            backend: 'https://github.com/jonathonmcclen/endurance-lactate-analyzer-API',
            stage: 'Development',
            num: 3,
        },
        {
            title: 'Pokemon Minigame App',
            image: poke,
            description: 'A collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
            goal: "I began this project with the hopes of refining my newly acquired knowledge of Javascript and React. In addition, I wanted to bring some life to the games with animations.",
            issue: 'While creating the track minigame, I wanted to utilize a number indicating the speed of each pokemon to influence the animation speed which moved them across the screen. This was inhibiting the user experience while playing this minigame.',
            solution: 'Using a callback function within the animation itself, I was able to utilize any stat on a given pokemon that would directly change the duration of the animation. Fast pokemon now darted across the track, while slower ones took much longer to reach the finish.',
            link: 'https://tranquil-scrubland-82540.herokuapp.com/',
            frontend: 'https://github.com/dylantoporek/pokemon-mini-game-project', 
            backend: 'https://github.com/dylantoporek/pokemon-minigame-backend',
            stage: 'Development',
            num: 4,
        },
        
    ])

    function handleProjectClick(e){
        if (showProjectDetails !== e.target.innerText){
        let wasSelected = document.getElementById(`${showProjectDetails}`)
        wasSelected.style.backgroundColor = 'aliceblue'
        wasSelected.style.color = 'black'
        e.target.style.backgroundColor = '#4B88A2'
        e.target.style.color = 'white'
        let details = document.getElementById('project-details-item')
        details.className = 'animate__animated animate__fadeOut animate__fast'

        let animationDirectionCheck = (wasSelected.value - e.target.value)
        
        setTimeout(()=>{
         setShowProjectDetails(e.target.innerText)
         let newDetails = document.getElementById('project-details-item')
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

    function handleProjectHover(e){
        setIsShown(e.target.value)
        if(showProjectDetails === e.target.innerText){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = 'lightblue'
        }
    }

    function handleProjectLeave(e){
        if(showProjectDetails === e.target.innerText){
            e.target.style.backgroundColor = '#4B88A2'
        }
        else {
            e.target.style.backgroundColor = '#FFF9FB'
        }
    }
    const targetedProject = projects.find((project) => {
        return project.title === showProjectDetails
    })

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
        } else if (tag === 'links'){
            if(isDesktop){
                return 18
            } else if (isMobile){
                return 8
            } else return 10
          }
          else if (tag === 'text-heading'){
            if(isDesktop){
                return 25
            } else if (isMobile){
                return 12
            } else return 14
          }
          else if (tag === 'text'){
            if(isDesktop){
                return 22
            } else if (isMobile){
                return 10
            } else return 12
          }

          
      }


    const projectButtonDisplay = projects.map((project)=>{
        return <Button 
            fontSize={isDesktop ? '20px' : undefined}
            cursor={'pointer'}
            mr={isMobile ? 5 : 0}
            p={5}
            minW={'fit-content'}
            h={isDesktop ? '100px':'50px'}
            key={project.title}
            id={project.title} 
            value={project.num}
            onClick={handleProjectClick}
            onMouseEnter={handleProjectHover}
            onMouseLeave={handleProjectLeave}
            style={{
                backgroundColor: showProjectDetails === project.title ? '#4B88A2' : '#FFF9FB',
                color: showProjectDetails === project.title ? 'white' : 'black', 
            }}>
                {project.title}
            </Button> 
    })

    const projectDisplay = <Flex
     id='project-details-item' 
     key={targetedProject.title}
     flexDirection={'column'}>
        <Flex id='wriiten-info' flexDirection={'column'} p={10} w={'100%'}>
            <Flex>
                <Heading mb={2} fontSize={handleFontSizing('heading')}>{targetedProject.title}</Heading>
            </Flex>
            <Flex id='more-info' flexDir={'column'} justifyContent={'center'}>
                <Text fontWeight={'600'} fontSize={handleFontSizing("dates")} mb={8}>{targetedProject.description}</Text>
                    <Flex flexDir={'column'} alignItems={'center'} justifyItems={'center'} justifyContent={'center'} mt={isDesktop ? 10: 0} mb={isDesktop ? 20: 6}>
                            <Image maxW={isMobile ? '200px': '35%'} src={targetedProject.image}/>
                            <Flex mt={3} fontSize={handleFontSizing('links')}>
                                <Link className="project-link" href={targetedProject.link} mr={3}>Demo</Link>
                                <Text mr={3}>|</Text>
                                <Link mr={3} className="project-link" href={targetedProject.frontend}>Frontend Repo</Link>
                                <Text mr={3}>|</Text>
                                <Link className="project-link" href={targetedProject.backend}>Backend Repo</Link>
                            </Flex>
                            
                            <Flex mt={1} fontSize={handleFontSizing('links')}>
                                <Text>Stage: {targetedProject.stage}</Text>
                            </Flex>
                    </Flex>
                    <Flex mb={5}>
                        <Flex flexDir={isMobile ? 'column':'row'} gap={2}>
                            <Flex flexDir={'column'} alignItems={'center'} maxW={isMobile ? '100%':'33%'} textAlign={'left'}>
                                <Text fontSize={handleFontSizing('text-heading')}>Goal</Text>
                                <Text fontSize={handleFontSizing('text')} p={4} fontWeight={'400'} mb={3}>{targetedProject.goal}</Text>
                            </Flex>
                            <Flex flexDir={'column'} alignItems={'center'} maxW={isMobile ? '100%':'33%'}>
                                <Text fontSize={handleFontSizing('text-heading')}>Issue</Text>
                                <Text fontSize={handleFontSizing('text')} p={4} fontWeight={'400'} mb={3}>{targetedProject.issue}</Text>
                            </Flex>
                            <Flex flexDir={'column'} alignItems={'center'} maxW={isMobile ? '100%':'33%'}>
                                <Text fontSize={handleFontSizing('text-heading')}>Solution</Text>
                                <Text fontSize={handleFontSizing('text')} p={4} fontWeight={'400'} mb={3}>{targetedProject.solution}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
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
        height: '100%%',
        borderRadius: '10px',
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",   
    }}> 
        <div className="scroll-section" style={{
            height: isDesktop ? '100px' : '50px',
            backgroundColor:'#061A40',
            top: 
            showProjectDetails === 'Breath of the Wild Cooking App' ? -3 : null ||
            showProjectDetails === 'Nintendo-Land' ? -3 + gap : null ||
            showProjectDetails === 'Endurance Lactate Analyzer' ? -3 + (gap*2) : null ||
            showProjectDetails === 'Pokemon Minigame App' ? -3 + (gap*3) : null
        }}></div>              
    </div>

    return (
        <Stack 
         mt={isDesktop ? '250px' : 10}
         mb={10}
         padding={5}
         id='home-projects'
         position={'relative'}
         width={'100%'}
         flexDir={'column'}
         alignSelf={'center'}>
            <Flex 
             justifyItems={'center'}
             padding={5}
             id='portfolio-container'
             position={'relative'}
             flexDirection={'column'}
             w={'100%'}
             borderRadius={'4%'}>
                
                <Flex id='projects-container' paddingTop={5} mt={10} justifyContent={'center'} ml={isMobile ? 0:10}>
                {isMobile ? (
                        <Flex flexDir={'column'} maxW={w}>
                            <Heading className='section-title' id='project-title' color={'#016BA6'} py={5} fontSize={35} mb={0}>
                                Projects
                            </Heading>
                            <Flex overflowX={'scroll'} scrollBehavior={'smooth'} mr={5}>
                                {projectButtonDisplay}
                            </Flex>
                            <Flex id='work-details' backgroundColor={'#EBEBEB'} borderRadius={'.5em'}>
                                {projectDisplay}
                            </Flex>
                        </Flex>

                    ) : (
                    <Flex w={isDesktop ? '71%' : '80%'} justifyContent={'center'} flexDir={'column'}>
                            <Heading 
                             className='section-title' 
                             id='project-title' 
                             color={'#016BA6'} 
                             py={2} 
                             fontSize={isDesktop ? 60: 35}
                              mb={10}>
                                    Projects
                                </Heading>
                            <Flex mt={10}>
                            <Flex w={'5px'} mr={isDesktop ? 10: 5}>
                                {animatedDisplay}
                            </Flex>

                            <Flex id='project-buttons' mr={isDesktop ? 10: 5} gap={1}>
                                {projectButtonDisplay}
                            </Flex>
                    
                            <Flex 
                            id='project-details' 
                            p={isDesktop ? 16: 4} backgroundColor={'#EBEBEB'} borderRadius={'.5em'} h={isDesktop ? '1000px':'500px'} w={'100%'}>
                                {projectDisplay}
                            </Flex>
                        </Flex>
                             
                    </Flex>
                    )}
                </Flex>
            </Flex>
        </Stack>
    );
}

export default ProjectItem