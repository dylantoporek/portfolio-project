import React, {useState, useRef} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home'
import '../App/index.scss'
// import '../../src/App.scss';
import Contact from '../../components/Contact/Contact';


function App() {
  const[selectedPage, setSelectedPage] = useState(null)
  const[isScroll, setIsScroll] = useState(false)

  function changePage(str){
    setSelectedPage(str)
  }


  return (
    <div id='app-container'>
      <Navbar selectedPage={selectedPage}/>
      {isScroll ? <Contact/> : null}

      <Routes>
        <Route path='/' element={<Home changePage={changePage}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
