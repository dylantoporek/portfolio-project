'use client'
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
  Image
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import {motion} from 'framer-motion'
import botw from '../../images/botw.png'
import nintendo from '../../images/nintendo.png'
import lactate from '../../images/lactate_1.png'
import poke from '../../images/poke.png'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [isShown, setIsShown] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState('Breath of the Wild Cooking App')
  const [slider, setSlider] = React.useState(0)
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10vw' })

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
      image: poke    
    },
  ]

  useEffect(() => {
    setSelectedProject(cards[slider])
  }, [slider])

  useEffect(() => {
    setTimeout(() => {
      handleSlide('timer')
    }, 10000)

  }, [selectedProject])

  function handleSlide(direction) {
    if (direction === 'right' && slider === cards.length - 1 ){
      setSlider(0)
    } else if (direction === 'right' && slider !== cards.length - 1 ){
      setSlider(slider + 1)
    } else if (direction === 'left' && slider === 0){
      setSlider(cards.length -1 )
    } else if (direction === 'left' && slider !== 0 ){
      setSlider(slider - 1)
    } else if (direction === 'timer'){
      if ( slider === cards.length -1){
        setSlider(0)
      } else setSlider(slider + 1)
    }
  }

  function handleBackgroundImage(){
    return `url(${selectedProject.image})`
  }

  const projectItem = <Flex 
   flexDir={'column'} 
   minH={'50vh'} 
   minW={'60vw'}
   p={10}>
    <Heading>
      {selectedProject.title}
    </Heading>
    <Text>
      {selectedProject.text}
    </Text>
    <Flex maxW={'20vw'}>
      <Image borderRadius={'.5em'} src={selectedProject.image}/>
    </Flex>
  </Flex>

console.log(selectedProject)
console.log(cards.length)

const variants = {
  left: { opacity: [1, 0, 1], x: [-100, 0] },
  right: { opacity: [1, 0, 1], x: [100, 0] },  
}
  return (
    <motion.div>
      <Stack>
        <Flex>
        <IconButton
          color={'white'}
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => handleSlide('left')}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          color={'white'}
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => handleSlide('right')}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        </Flex>
        <motion.div
        animate={isShown ? 'left' : 'right'}
        variants={variants}
         style={{
          borderRadius: '.5em',
          backgroundColor: 'rgba(255, 255, 255, .1)',
          position: 'relative',
          left: '20%'
         }}>
          {projectItem}
        </motion.div>
      </Stack>
    </motion.div>
  )
}

