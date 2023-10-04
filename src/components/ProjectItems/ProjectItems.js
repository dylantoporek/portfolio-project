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
  transition
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import {motion} from 'framer-motion'
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'



export default function ProjectItems() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [isShown, setIsShown] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState('')
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
})
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Breath of the Wild Cooking App',
      text: 'A cooking mini-game with an in-game shop. Buy ingredients and cook them!',
      image: botw
    },
    {
      title: 'Nintendo-Land',
      text: 'A board game where you race to the finish against three computer opponents.',
      image: nintendo    
    },
    {
      title: 'Pokemon Minigame App',
      text: 'A collection of Pokemon themed mini-games. Race on the track or battle in the arena!',
      image: poke,
      url: 'https://tranquil-scrubland-82540.herokuapp.com/'    
    },
  ]



    const variants = {
        open: { opacity: [0, 1]},
        close: { opacity: 0 },  
    }

    return (
        <motion.div>
        <Stack mt={5}>
                <Flex
                    flexDir={'row'} 
                    alignSelf={'flex-start'}
                    p={isMobile ? 1 : 0}
                    fontSize={isMobile ? '12px' : '14px'}
                    fontWeight={300}
                    >
                        {/* <Flex 
                            background={'linear-gradient(to top,  #90EE90 0%, #67D89A 20%, #34BEA5 40%, #1EA9AC 60%, #1D80AF 80%, #1C61B1 100%)'} 
                            minW={'3px'}
                            borderRadius={'5em'}
                            marginRight={2}>
                        </Flex> */}
                    <Flex flexDir={isMobile ? 'column':'row'} gap={isMobile ? 10:2} w={'75vw'}>
                        {cards.map((card, i) => {
                           if (!isMobile){
                            return (
                                <motion.div
                                    onMouseOut={() => setSelectedProject('')}
                                    onMouseOver={() => setSelectedProject(card)}
                                    style={{
                                    transition: 'all ease-in',
                                    transitionDuration: '.5s',
                                    height: 'fit-content',
                                    width: '400px',
                                    cursor: 'pointer',
                                    borderRadius: '.5em',
                                    backgroundColor: 'rgba(255, 255, 255, .1)',
                                    }}>
                                        <Text p={5}>
                                            {card.title}
                                        </Text>
                                        {selectedProject.title === card.title ? 
                                        <motion.div 
                                        animate={selectedProject.title === card.title ? 'open' : 'close'}
                                        variants={variants}
                                        style={{
                                            transition: 'all ease-in .5s',
                                            marginTop: 10,
                                            opacity: selectedProject.title === card.title ? 1:0,
                                            }}>
                                            <Flex flexDir={'column'} p={5}>
                                                <Text>
                                                    {card.text}
                                                </Text>
                                                <Image alignSelf={'center'} w={'20vw'} src={card.image}/>
                                            </Flex>
                                        </motion.div>
                                        : null
                                        }
                                </motion.div>
                            )
                           } else return (
                            <motion.div
                                id={card.title}
                                onClick={() => {
                                selectedProject.title === card.title ? setSelectedProject(''):setSelectedProject(card)
                                }}
                                animate={{height: selectedProject.title === card.title ? '.25' : 'fit-content'}}
                                transition={{delay: .2}}
                                style={{
                                cursor: 'pointer',
                                borderRadius: '.5em',
                                backgroundColor: 'rgba(255, 255, 255, .1)',
                                }}
                                >
                                        <Text p={5}>
                                            {card.title}
                                        </Text>
                                    {selectedProject.title === card.title ? 
                                        <motion.div
                                         transition={{delay: .2}} 
                                         animate={ selectedProject.title === card.title ? 'open' : 'close'}
                                         variants={variants}
                                        >
                                            <Flex flexDir={'column'} p={5}>
                                                <Text mb={5}>
                                                    {card.text}
                                                </Text>
                                                    <Image 
                                                        onClick={() => window.open(card.url, '_blank', 'noopener,noreferrer')}
                                                        borderRadius={'.5em'}
                                                        mb={5} 
                                                        alignSelf={'center'} 
                                                        maxW={'250px'} 
                                                        src={card.image}/>
                                                
                                            </Flex>
                                        </motion.div>
                                     :null
                                    }
                                </motion.div>
                           )
                        })}
                    </Flex>
                </Flex>
            </Stack>
        </motion.div>
    )
}

