import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home'
import Contact from '../../components/Contact/Contact';
import { ChakraProvider, Stack, useMediaQuery, Flex, Heading } from '@chakra-ui/react'
import '../../index.scss'
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import {motion} from "framer-motion"


function App() {
  const[selectedPage, setSelectedPage] = useState(null)
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
})
const [toggleNavbar, setToggleNavbar] = useState(false)
  function changePage(str){
    setSelectedPage(str)
  }
  const [animation, setAnimation] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false)
    }, 2000)
  }, []) 
  
  return (
    <ChakraProvider>
      {firstLoad ? (
        <motion.div
        inital={{opacity: 1}}
        animate={{opacity: firstLoad ? 1 : 0}}>
          <LoadingScreen/>
        </motion.div>
        
      ):(
      <motion.div
       inital={{opacity: 0}}
       animate={{
        opacity: 1,
      }}
       >
      <Flex w={'100vw'} color={'#F7F7F9'} position={'fixed'} zIndex={1}>
        <Navbar animation={animation} setAnimation={setAnimation}/>
      </Flex>
      <Stack
        color={'#F7F7F9'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        backgroundColor={'#1D1D20'}
        p={isMobile ? 5: 0}
        minW={'100vw'}
        minH={'100vh'}>
          <Flex
            backgroundColor={'#1D1D20'}
            flexDir={'column'}
            p={isMobile ? 5: 0}
            h={isMobile ? '85vh':'80vh'}
            maxW={'85vw'}
            w={'85vw'}
            > 
            <Routes>
                <Route path='/' element={<Home changePage={changePage}/>}/>
                <Route path='/projects' element={<Projects changePage={changePage}/>}/>
                <Route path='/experience' element={<Experience changePage={changePage}/>}/>
            </Routes>
          </Flex>
          <Flex position={'fixed'} bottom={0} w={'100%'}>
            <Contact toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/>
          </Flex>
      </Stack>
      </motion.div>
      )}
    </ChakraProvider>
  );
}

export default App;
