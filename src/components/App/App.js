import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home'
import Contact from '../../components/Contact/Contact';
import { ChakraProvider, Stack, useMediaQuery, Flex, Heading } from '@chakra-ui/react'
import '../../index.scss'
import ProjectItem from '../ProjectItem/ProjectItem';
import Experience from '../Experience/Experience';


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

  return (
    <ChakraProvider>
      <Flex w={'100vw'} color={'#F7F7F9'} position={'fixed'} zIndex={1}>
        <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/>
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
            maxW={'90vw'}
            minW={'90vw'}
            > 
            <Routes>
                <Route path='/' element={<Home changePage={changePage}/>}/>
                <Route path='/projects' element={<ProjectItem changePage={changePage}/>}/>
                <Route path='/experience' element={<Experience changePage={changePage}/>}/>
            </Routes>
          </Flex>
          <Flex position={'fixed'} bottom={0} w={'100%'}>
            <Contact toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/>
          </Flex>
      </Stack>
    </ChakraProvider>


  );
}

export default App;
