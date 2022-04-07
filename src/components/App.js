import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import '../../src/App.css';

function App() {
  return (
    <div id='app-container'>
      <Navbar/>
      <Routes>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
