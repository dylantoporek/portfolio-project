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
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
        flexDirection={'column'}
        backgroundColor={'#E6E6E6'}
        h={'100vh'}
        w={'100vw'}>
          
        <Flex flexDir={'column'} p={10} border={'1px solid black'} h={'90vh'} w={'96vw'}>
          <Heading size={'3xl'} fontWeight={200} mb={4}>Dylan Toporek</Heading>
          <Heading size={'md'} fontWeight={300}>Full Stack Engineer & Developer</Heading>
          
          <Flex mt={10}>
            <Navbar/>
          </Flex>
        </Flex>

       
        <Routes>
          <Route path='/' element={<Home changePage={changePage}/>}/>
          <Route path='/projects' element={<ProjectItem changePage={changePage}/>}/>
          <Route path='/experience' element={<InteractiveResume changePage={changePage}/>}/>
        </Routes>
      </Stack>
    </ChakraProvider>


  );
}

export default App;
