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

  function changePage(str){
    setSelectedPage(str)
  }


  return (
    <ChakraProvider>
      <Stack
        color={'#F7F7F9'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
        flexDirection={'column'}
        backgroundColor={'#1D1D20'}
        minH={'100vh'}
        minW={'100vw'}>

        <Flex flexDir={'column'} p={10} h={'100vh'} w={'100vw'}>
          <Contact/>
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
