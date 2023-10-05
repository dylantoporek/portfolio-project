import React, { useState, useEffect } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Image,
  useMediaQuery,
  Link
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import {motion, AnimatePresence} from 'framer-motion'
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'



export default function ProjectItems() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [loading, setLoading] = React.useState(true)
  const [isShown, setIsShown] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState('')
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
})

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        })
        
    }, [])
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Breath of the Wild Cooking App',
      text: 'A cooking mini-game with an in-game shop. Buy ingredients and cook them!',
      image: botw,
      frontend: 'https://github.com/dylantoporek/botw-recipe-app',
      backend: 'https://github.com/dylantoporek/botw-recipe-app-backend'
    },
    {
      title: 'Nintendo-Land',
      text: 'A board game where you race to the finish against three computer opponents.',
      image: nintendo, 
      frontend: 'https://github.com/dylantoporek/Nintendo-Land',
      backend: 'https://github.com/dylantoporek/Board-Game-Backend'  
    },
    {
      title: 'Pokemon Minigame App',
      text: 'A collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
      image: poke,
      url: 'https://tranquil-scrubland-82540.herokuapp.com/',
      frontend: 'https://github.com/dylantoporek/pokemon-mini-game-project',
      backend: 'https://github.com/dylantoporek/pokemon-minigame-backend'     
    },
  ]



    const variants = {
        open: { 
            opacity: 1, 
            height: isMobile ? '200px' : 'unset', 
            transition: 'all ease-in'},
        close: { 
            opacity:  0,
            height: isMobile ? '20px' : 'unset', 
            transition: 'all ease-in' },  
    }
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 10,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };
    return (
        <AnimatePresence>
        <Stack>
                <Flex
                    flexDir={isMobile ? 'column':'row'} 
                    alignSelf={'flex-start'}
                    p={isMobile ? 1 : 0}
                    fontSize={isMobile ? '12px' : '14px'}
                    fontWeight={300}
                    >
                    <Flex 
                     flexDir={isMobile ? 'column':'row'} 
                     fontSize={isMobile ? 10: 12} 
                     gap={isMobile ? 10:5} 
                     w={isMobile ? '79vw':'85vw'}
                     justifyContent={'space-between'}>
                        {cards.map((card, i) => {
                            // DESKTOP
                           if (!isMobile){
                            return (
                                <motion.div
                                    onClick={() => {
                                        setIsShown(false)
                                        setTimeout(() => {
                                            selectedProject.title === card.title ? setSelectedProject(''):setSelectedProject(card)
                                            setIsShown(true)
                                        }, 100)
                                        }}
                                    style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all ease-in',
                                    height: 'fit-content',
                                    minHeight: '300px',
                                    width: '300px',
                                    cursor: 'pointer',
                                    borderRadius: '.5em',
                                    backgroundColor: 'rgba(255, 255, 255, .1)',
                                    }}>
                                        <Text alignSelf={'center'} p={5} fontWeight={'bold'}>
                                            {card.title}
                                        </Text>
                                        {selectedProject.title === card.title && isShown ? 
                                        <motion.div 
                                        animate={selectedProject.title === card.title && !loading ? 'open' : 'close'}
                                        variants={variants}
                                        style={{
                                            transition: 'all ease-in',
                                            marginTop: 0,
                                            }}>
                                            <Flex flexDir={'column'} p={5}>
                                                <Text mb={5}>
                                                    {card.text}
                                                </Text>
                                                <Image alignSelf={'center'} w={'20vw'} src={card.image}/>
                                            </Flex>
                                        </motion.div>
                                        : 
                                        <motion.div 
                                        animate={selectedProject.title === card.title ? 'open' : 'close'}
                                        variants={variants}
                                        initial={{opacity: 0, }}
                                        style={{
                                            transition: 'all ease-in',
                                            marginTop: 0,
                                            }}>
                                            <Flex flexDir={'column'} p={5}>
                                                <Text mb={5}>
                                                    {card.text}
                                                </Text>
                                                <Image alignSelf={'center'} w={'20vw'} src={card.image}/>
                                            </Flex>
                                        </motion.div>
                                        }
                                </motion.div>
                            )
                           } else return (
                            // MOBILE
                            <motion.div
                                id={card.title}
                                onClick={() => {
                                selectedProject.title === card.title ? setSelectedProject(''):setSelectedProject(card)
                                }}
                                style={{
                                cursor: 'pointer',
                                borderRadius: '.5em',
                                backgroundColor: 'rgba(255, 255, 255, .1)',
                                }}
                                >
                                        <Text fontWeight={'bold'} p={5}>
                                            {card.title}
                                        </Text>
                                    {selectedProject.title === card.title ? 
                                        <motion.div
                                         initial={{opacity: 0}}
                                         animate={ selectedProject.title === card.title ? 'open' : 'close'}
                                         variants={variants}
                                         transition={{
                                            delay: 1,
                                            staggerChildren: 1
                                        }}
                                        >
                                            <Flex flexDir={'column'} p={5}>
                                                <Text mb={5}>
                                                    {card.text}
                                                </Text>
                                               
                                                    <Image 
                                                        borderRadius={'.5em'}
                                                        mb={5} 
                                                        alignSelf={'center'} 
                                                        maxW={'250px'} 
                                                        src={card.image}/>
                                                
                                            </Flex>
                                        </motion.div>
                                     :
                                     <motion.div
                                     transition={{delay: 0}} 
                                     animate={ selectedProject.title === card.title ? 'open' : 'close'}
                                     initial={{opacity: 0}}
                                     variants={variants}
                                    >
                                        <Flex flexDir={'column'} p={5}>
                                            {/* <Text mb={5}>
                                            </Text>
                                                <Image
                                                    borderRadius={'.5em'}
                                                    mb={5} 
                                                    alignSelf={'center'} 
                                                    maxW={'0px'} 
                                                    src={card.image}/> */}
                                            
                                        </Flex>
                                    </motion.div>
                                    }
                                </motion.div>
                           )
                        })}
                    </Flex>
                </Flex>
            </Stack>
        </AnimatePresence>
    )
}

