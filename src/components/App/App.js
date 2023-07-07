import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home'
import Contact from '../../components/Contact/Contact';
import { ChakraProvider, Stack, useMediaQuery } from '@chakra-ui/react'


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
      flexDir={'column'}
      background-color={'#FFF9FB'}>
      <Navbar selectedPage={selectedPage}/>
      {isMobile ? null : <Contact/>}
      <Routes>
        <Route path='/' element={<Home changePage={changePage}/>}/>
      </Routes>
    </Stack>
    </ChakraProvider>
  );
}

export default App;
