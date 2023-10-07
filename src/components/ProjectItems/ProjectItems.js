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
import { ExternalLinkIcon } from '@chakra-ui/icons'
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

const [isDesktop] = useMediaQuery("(min-width: 1450px)", {
    ssr: true,
    fallback: false,
})

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            setSelectedProject(cards[0])
            setIsShown(true)
        }, 600)
        
    }, [])
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Breath of the Wild Cooking App',
      text: 'A cooking mini-game with an in-game shop. Buy ingredients and cook them!',
      image: botw,
      frontend: 'https://github.com/dylantoporek/botw-recipe-app',
      backend: 'https://github.com/dylantoporek/botw-recipe-app-backend',
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
        },
        close: { 
            opacity:  0,
        }
    }

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 0;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
    };
    return (
        <motion.div
         initial={{ opacity: 0, scale: 1 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.2 }}>
        <Stack>
                <Flex
                    flexDir={ 'column'} 
                    alignSelf={'flex-start'}
                    p={isMobile ? 1 : 0}
                    fontSize={isMobile ? '12px' : '14px'}
                    fontWeight={300}
                    >
                    <Flex 
                     flexDir={'column'} 
                     fontSize={isMobile ? 14: 16} 
                     gap={isMobile ? 10:5} 
                     w={isMobile ? '75vw':'85vw'}
                     h={isMobile ? '65vh':'55vh'}
                     align={'center'}
                     >
                    {selectedProject !== '' ? 
                        <motion.div
                         initial={{opacity: 0}}
                         animate={isShown ? 'open': 'close'}
                         variants={variants}
                         transition={{delayChildren: 1}}>
                            <Flex 
                             fontSize={isMobile ? '14px' : '16px'}
                             flexDir={'column'}
                             mt={isMobile ? 10:0}
                             w={'80vw'}
                             minH={'60vh'}
                             alignItems={'center'}
                             mr={10}
                             ml={10}
                             p={5}>  
                                <Text fontWeight={'bold'}>{selectedProject.title}</Text>
                                <Text mb={5}>{selectedProject.text}</Text>
                                <Image mb={5} w={isMobile ? '300px':'500px'} src={selectedProject.image} borderRadius={'.5em'}/>
                                <Flex gap={5}>
                                    <Link href={selectedProject.frontend} isExternal>
                                        Frontend Repo <ExternalLinkIcon mx='2px' />
                                    </Link>
                                    <Link href={selectedProject.backend} isExternal>
                                        Backend Repo <ExternalLinkIcon mx='2px' />
                                    </Link>
                                </Flex>
                            </Flex>  
                        </motion.div>
                        :
                        null
                    }
                    </Flex>
                    <Flex alignSelf={'center'}>
                        {cards.map((card) => {
                            return (
                                    <motion.svg
                                        width="50"
                                        height="30"
                                        viewBox={'0, 0, 120, 120'}
                                        initial="hidden"
                                        animate="visible"
                                     >
                                        <motion.circle
                                        onClick={() => {
                                            setIsShown(false)
                                            setTimeout(() => {
                                                selectedProject.title === card.title ? setSelectedProject(''):setSelectedProject(card)
                                                setIsShown(true)
                                            }, 200)
                                        }}
                                        stroke-width={ '10px'}
                                        stroke-linecap={ 'round'}
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        fill={selectedProject.title === card.title ? 'rgba(255, 255, 255, 1)':'transparent'}
                                        cx="50"
                                        cy="60"
                                        r="30"
                                        stroke="grey"
                                        variants={draw}
                                        custom={1}
                                    />
                            </motion.svg>
                            )
                        })}
                    </Flex>
                </Flex>
            </Stack>
        </motion.div>
    )
}

