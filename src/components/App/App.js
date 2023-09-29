import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home'
import Contact from '../../components/Contact/Contact';
import { ChakraProvider, Stack, useMediaQuery, Flex, Heading } from '@chakra-ui/react'
import '../../index.scss'
import ProjectItem from '../ProjectItem/ProjectItem';
import InteractiveResume from '../InteractiveResume/InteracticeResume';


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
            transition={'all ease-in .2s'} 
            flexDir={'column'} 
            p={isMobile ? 5: 0}
            alignSelf={'center'}
            h={'96vh'}
            maxW={'100vw'}>
              
              {/* <Contact toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/> */}
            <Routes>
                <Route path='/' element={<Home changePage={changePage}/>}/>
                <Route path='/projects' element={<ProjectItem changePage={changePage}/>}/>
                <Route path='/experience' element={<InteractiveResume changePage={changePage}/>}/>
            </Routes>
          </Flex>


        

       
        
      </Stack>
    </ChakraProvider>


  );
}

export default App;
