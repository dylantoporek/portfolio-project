import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home'
import Contact from '../../components/Contact/Contact';
import { ChakraProvider, Stack } from '@chakra-ui/react'


function App() {
  const[selectedPage, setSelectedPage] = useState(null)
  // const[isScroll, setIsScroll] = useState(false)

  function changePage(str){
    setSelectedPage(str)
  }


  return (
    <ChakraProvider>
    <Stack 
      flexDir={'column'}
      width={'100%'}
      height={'100%'}
      background-color={'#FFF9FB'}>
      <Navbar selectedPage={selectedPage}/>
      <Contact/>
      <Routes>
        <Route path='/' element={<Home changePage={changePage}/>}/>
      </Routes>
    </Stack>
    </ChakraProvider>
  );
}

export default App;
