import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import '../../src/App.css';
import Contact from './Contact';


function App() {
  const[selectedPage, setSelectedPage] = useState(null)

  function changePage(str){
    setSelectedPage(str)
  }
  return (
    <div id='app-container'>
      <Navbar selectedPage={selectedPage}/>
      <div id='home-contact-bar'>
        <Contact/>
      </div>
      <Routes>
        {/* <Route path='/portfolio' element={<Portfolio changePage={changePage}/>}/>
        <Route path='/about' element={<About changePage={changePage}/>}/> */}
        <Route path='/' element={<Home changePage={changePage}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
