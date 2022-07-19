import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../../components/Home/Home'
import '../App/index.scss'
// import '../../src/App.scss';
import Contact from '../../components/Contact/Contact';


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
        <Route path='/' element={<Home changePage={changePage}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
